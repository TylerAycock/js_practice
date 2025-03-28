// Write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

function incrementString(s) {
  let startDigit = -1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (isNaN(parseInt(s[i]), 10)) {
      if (startDigit === -1 && i === s.length - 1) {
        return s + 1;
      }
      startDigit = i + 1;
      break;
    }
  }
  let string = s.substring(0, startDigit);
  let nums = s.substring(startDigit);
  let number = parseInt(nums, 10) + 1;
  let result = String(number).padStart(nums.length, "0");
  return string + result;
}

console.log(incrementString("fo99obar99")); // "fo99obar100"
//  console.log(incrementString("foobar999"), "foobar1000");
// console.log(incrementString("1"));
console.log(incrementString("foo"));
