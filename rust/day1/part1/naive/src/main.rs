use std::fs;

fn main() {
  let contents = fs::read_to_string("./../../data").expect("Something went wrong reading the file");

  let values: Vec<&str> = contents.lines().collect();

  let mut increments = 0;

  for n in 1..values.len() {
    let current_value = values[n].parse::<i32>().unwrap();
    let previous_value = values[n - 1].parse::<i32>().unwrap();
    if previous_value < current_value {
      increments += 1;
    }
  }

  println!("Report contains {} increments", increments);
}
