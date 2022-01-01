use crate::{command::Command, movement::Movement};

pub struct Position {
    horizontal: u16,
    vertical: u16,
}

impl Position {
    pub fn new() -> Self {
        Self {
            horizontal: 0,
            vertical: 0,
        }
    }

    pub fn apply_command(&mut self, command: Command) {
        match command.movement() {
            Movement::Down => self.vertical += command.units() as u16,
            Movement::Up => self.vertical -= command.units() as u16,
            Movement::Forward => self.horizontal += command.units() as u16,
        }
    }

    pub fn horizontal(&self) -> &u16 {
        &self.horizontal
    }

    pub fn vertical(&self) -> &u16 {
        &self.vertical
    }

    pub fn coordinates_product(&self) -> u32 {
        self.vertical as u32 * self.horizontal as u32
    }
}
