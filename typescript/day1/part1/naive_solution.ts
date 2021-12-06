import data from '../measurements/data';

let previousIndex = 0;
let currentIndex = 1;

let increments: number = 0;
for (let i = 1; i < data.length; i++) {
  if (data[previousIndex] < data[currentIndex]) {
    increments = increments + 1;
  }

  previousIndex = previousIndex + 1;
  currentIndex = currentIndex + 1;
}

console.log(`The number of increments are ${increments}`);