// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// ex: 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)

const persistence = (n) => {
  let count = 0;
  while (n >= 10) {
    let initial = String(n)
      .split("")
      .map((num) => +num);

    n = initial.reduce((acc, cur) => acc * cur);
    count++;
  }

  return count;
};


//console.log(persistence(39)); //3
//console.log(persistence(999)) //4
console.log(persistence(5111511)) //3