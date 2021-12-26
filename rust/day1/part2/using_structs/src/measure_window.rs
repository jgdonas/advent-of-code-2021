pub struct MeasureWindow {
    measures: Vec<i32>,
}

impl MeasureWindow {
  pub fn sum(&self) -> i32 {
    self.measures.iter().sum()
  }

  pub fn from_slice(slice: &[i32]) -> MeasureWindow {
    MeasureWindow {
      measures: Vec::from(slice),
    }
  }
}