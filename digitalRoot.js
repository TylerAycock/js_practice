// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples:
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6

function digitalRoot(n) {
  while (n > 10) {
    n = `${n}`.split("").reduce((cur, acc) => +cur + +acc);
  }
  return n;
}

console.log(digitalRoot(942));
