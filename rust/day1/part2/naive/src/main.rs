use std::fs;

fn main() {
  const WINDOW_SIZE: usize = 3;

  let data = fs::read_to_string("./../../data").expect("Could not read data file!");

  let values: Vec<i32> = data
    .lines()
    .map(|value| value.parse::<i32>().unwrap())
    .collect();

  let mut increments: i32 = 0;
  for n in 1..values.len() - (WINDOW_SIZE - 1) {
    let previous_window_starting_index = n - 1;
    let previous_window_ending_index = previous_window_starting_index + WINDOW_SIZE;
    let previous_window = &values[previous_window_starting_index..previous_window_ending_index];
    let previous_window_sum: i32 = previous_window.iter().sum();

    let current_window_starting_index = n;
    let current_window_ending_index = current_window_starting_index + WINDOW_SIZE;
    let current_window = &values[current_window_starting_index..current_window_ending_index];
    let current_window_sum: i32 = current_window.iter().sum();

    if current_window_sum > previous_window_sum {
      increments += 1;
    }
  }

  println!("Total increments {}", increments);
}
