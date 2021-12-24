import data from '../measurements/data';

let increments: number = 0;
let iterations = 0;
for (let i = 1; i < data.length; i++) {
  console.log(`comparing indexes ${i} and ${i - 1}`)
  if (data[i - 1] < data[i]) {
    increments = increments + 1;
  }
  iterations = iterations + 1;
}

console.log(`The number of increments are ${increments} and iterations: ${iterations}`);