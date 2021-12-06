import inputs from './../inputs/data';

const position = {
  horizontal: 0,
  vertical: 0,
  aim: 0,
}

enum Command {
  FORWARD = 'forward',
  DOWN = 'down',
  UP = 'up'
}

type Input = {
  command: string
  units: number,
}

inputs.forEach((input: Input) => {
  const { command, units } = input;
  if (command === Command.FORWARD) {
    position.horizontal = position.horizontal + units;
    position.vertical = position.vertical + (position.aim * units);
  } else if (command === Command.DOWN) {
    position.aim = position.aim + units;
  } else if (command === Command.UP) {
    position.aim = position.aim - units;
  }
})

console.log(`Final position is ${JSON.stringify(position)}`);
console.log(`Position values product is ${position.horizontal * position.vertical}`);