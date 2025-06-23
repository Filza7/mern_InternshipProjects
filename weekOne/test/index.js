function swapNumbers(a, b) {
  console.log("Before swap: a =", a, ", b =", b);
  let temp = a;
  a = b;
  b = temp;

  console.log("After swapping: a =", a, ", b =", b);
}
swapNumbers(5, 10);