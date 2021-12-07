import reports from './../reports/data';

const REPORT_LENGHT = '101000101111'.length;

const getOxigenGeneratorRating = (reports: Array<string>) => {
  let oxigenCandidates = reports;

  let currentBitBeingAnalized = 0;
  let moreBitsToAnalyze = true;
  let remainingCandidates = true;
  // for (let i = 0; i < REPORT_LENGHT; i = +1) {
  while (moreBitsToAnalyze && remainingCandidates) {
    const zeroStartingReports: Array<string> = [];
    const oneStartingReports: Array<string> = [];

    oxigenCandidates.forEach(candidate => candidate.charAt(currentBitBeingAnalized) === '0' ? zeroStartingReports.push(candidate) : oneStartingReports.push(candidate));

    if (oneStartingReports.length >= zeroStartingReports.length) {
      oxigenCandidates = oneStartingReports;
    } else {
      oxigenCandidates = zeroStartingReports;
    }

    currentBitBeingAnalized += 1;
    moreBitsToAnalyze = currentBitBeingAnalized < REPORT_LENGHT;
    remainingCandidates = oxigenCandidates.length > 1;

    console.log(`remaining candidates; ${oxigenCandidates.length}`);
    console.log(`current bit being analized: ${currentBitBeingAnalized}`);
  }
  return oxigenCandidates.shift();
}

const getCO2GeneratorRating = (reports: Array<string>) => {
  let co2Candidates = reports;

  let currentBitBeingAnalized = 0;
  let moreBitsToAnalyze = true;
  let remainingCandidates = true;
  // for (let i = 0; i < REPORT_LENGHT; i = +1) {
  while (moreBitsToAnalyze && remainingCandidates) {
    const zeroStartingReports: Array<string> = [];
    const oneStartingReports: Array<string> = [];

    co2Candidates.forEach(candidate => candidate.charAt(currentBitBeingAnalized) === '0' ? zeroStartingReports.push(candidate) : oneStartingReports.push(candidate));

    if (zeroStartingReports.length <= oneStartingReports.length) {
      co2Candidates = zeroStartingReports;
    } else {
      co2Candidates = oneStartingReports;
    }

    currentBitBeingAnalized += 1;
    moreBitsToAnalyze = currentBitBeingAnalized < REPORT_LENGHT;
    remainingCandidates = co2Candidates.length > 1;

    console.log(`remaining candidates; ${co2Candidates.length}`);
    console.log(`current bit being analized: ${currentBitBeingAnalized}`);
  }
  return co2Candidates.shift();
}

const oxigenGeneratorRating = getOxigenGeneratorRating(reports);
const co2ScrubberRating = getCO2GeneratorRating(reports);

console.log(`oxigen generator rating: ${oxigenGeneratorRating}`);
console.log(`CO2 scrubber rating: ${co2ScrubberRating}`);

console.log(`result: ${parseInt(oxigenGeneratorRating!, 2) * parseInt(co2ScrubberRating!, 2)}`)