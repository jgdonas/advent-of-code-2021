use crate::movement::Movement;

#[derive(Copy, Clone)]
pub struct Command {
    movement: Movement,
    units: u8,
}

impl Command {
    pub fn new(movement: Movement, units: u8) -> Self {
        Self { movement, units }
    }

    pub fn movement(self) -> Movement {
        self.movement
    }

    pub fn units(self) -> u8 {
        self.units
    }
}
