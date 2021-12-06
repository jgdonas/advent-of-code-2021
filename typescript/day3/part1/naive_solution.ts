import reports from './../reports/data';

const SIMPLE_MAJORITY = reports.length / 2;

type BitPosition = number;
type ActiveBitsCounter = number;

const extractRatesFromReports = (reports: Array<string>) => {

  const activeBitsCounterByPosition = new Map<BitPosition, ActiveBitsCounter>();

  const reportValue = reports[1];
  reportValue.split('').forEach((_, index) => activeBitsCounterByPosition.set(index, 0));

  reports.forEach(report => {

    report.split('').forEach((value, index) => {
      if (value === '1') {
        const previousCounterValue = activeBitsCounterByPosition.get(index)!;
        activeBitsCounterByPosition.set(index, previousCounterValue + 1);
      }

    });

  });

  const gammaRate = [];
  const epsilonRate = [];
  for (const value of activeBitsCounterByPosition.values()) {
    if (value > SIMPLE_MAJORITY) {
      gammaRate.push('1');
      epsilonRate.push('0');
    } else {
      gammaRate.push('0');
      epsilonRate.push('1');
    }
  };

  return {
    gamma: gammaRate.join(''),
    epsilon: epsilonRate.join(''),
  };
}

const { gamma, epsilon } = extractRatesFromReports(reports);

console.log(`Gamma and epsilon rates product: ${parseInt(gamma, 2) * parseInt(epsilon, 2)}`)

