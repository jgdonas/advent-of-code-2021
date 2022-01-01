use std::fs;

mod position;
use position::Position;

mod command;
use command::Command;

mod movement;
use movement::Movement;

fn main() {
    let content = fs::read_to_string("../data").expect("Couldn't open data file");

    let lines: Vec<&str> = content.lines().collect();

    let mut commands: Vec<Command> = vec![];
    for line in lines {
        let command_parts: Vec<&str> = line.split(' ').collect();

        let movement = match command_parts[0] {
            "forward" => Movement::Forward,
            "down" => Movement::Down,
            "up" => Movement::Up,
            _ => Movement::Up,
        };

        let units: u8 = command_parts[1].parse::<u8>().unwrap();

        commands.push(Command::new(movement, units));
    }

    let mut position = Position::new();

    for command in commands {
        position.apply_command(command);
    }

    print!(
        "The final position is {}h, {}v, and the result: {}",
        position.horizontal(),
        position.vertical(),
        position.coordinates_product(),
    );
}
