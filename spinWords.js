// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

const spinWords = (s) => {
  return s
    .split(" ")
    .map((word) => {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
};

console.log(spinWords("Hey fellow warriors")); //--> "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // --> "This is a test"
console.log(spinWords("This is another test")); //--> "This is rehtona test"
