fn main() {
    let x = 5;
    let y = 9;

    println!("Values before swap: x = {}, y = {}", x, y);

    let (x, y) = swap(x, y); // reassign swapped values

    println!("Values after swap: x = {}, y = {}", x, y);
}

fn swap(x: i32, y: i32) -> (i32, i32) {
    (y, x) // return swapped tuple
}