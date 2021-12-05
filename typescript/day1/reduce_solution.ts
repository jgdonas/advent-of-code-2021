import data from './data';

const INITIAL_VALUE: number = 0;

const reducerFunction = (accumulatedValue: number, currentValue: number, currentIndex: number, array: Array<number>) => {
  const previousValue = array[currentIndex - 1];
  if (currentValue > previousValue) {
    return accumulatedValue + 1;
  }

  return accumulatedValue;
}

const increments: number = data.reduce(reducerFunction, INITIAL_VALUE);

console.log(`The number of increments are ${increments}`);