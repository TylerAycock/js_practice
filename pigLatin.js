// Write a function taht moves the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

const pigIt = (s) => {
  return s
    .split(" ")
    .map((word) => {
      if (word.match(/\W/)) {
        return word;
      } else {
        return word.slice(1) + "" + word[0] + "" + "ay";
      }
    })
    .join(" ");
};

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !
