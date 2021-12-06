import data from '../measurements/data';

let increments = 0;

const WINDOW_SIZE = 3;
const WINDOWS_OFFSET = 1;

const sumDataInWindow = (window: Array<number>) => window.reduce((accumulator, nextNumber) => accumulator + nextNumber, 0);

const extractWindowDataFromIndex = (data: Array<number>, index: number) => data.slice(index, WINDOW_SIZE + index);

let currentWindowStartingIndex = 1;

while (currentWindowStartingIndex < data.length - (WINDOW_SIZE - 1)) {
  const previousWindow: Array<number> = extractWindowDataFromIndex(data, currentWindowStartingIndex - WINDOWS_OFFSET);
  const currentWindow: Array<number> = extractWindowDataFromIndex(data, currentWindowStartingIndex);

  const previosWindowMeasurementsSum = sumDataInWindow(previousWindow);
  const currentWindowMeasurementsSum = sumDataInWindow(currentWindow)

  if (currentWindowMeasurementsSum > previosWindowMeasurementsSum) {
    increments = increments + 1;
  }

  currentWindowStartingIndex = currentWindowStartingIndex + 1;
}

console.log(`The number of increments are ${increments}`);

