// Create a function to square every digit of a number and concatenate them.

const squareDigits = (num) => {
  return +`${num}`
    .split("")
    .map((num) => num * num)
    .join("");
};

console.log(squareDigits(9119));

// Create a function that takes an array of words and does the following:
// 1. Capitalise the first letter of the first word.
// 2. Add a period (.) to the end of the sentence.
// 3. Join the words into a complete string, with spaces.
// 4. Do no other manipulation on the words.

const sentencify = (arr) => {
  if (arr.length > 1) {
    let first = arr[0];
    return `${first[0].toUpperCase() + first.slice(1)} ${arr
      .slice(1)
      .join(" ")}.`;
  } else {
    let filtered = arr[0].split(" ").filter((item) => /[a-zA-Z]/.test(item));
    return `${filtered[0].split("")[0].toUpperCase() + filtered[0].slice(1)}.`;
  }
};

console.log(sentencify(["this", "is", "a", "sentence"]));
console.log(sentencify(["yes ."]));
