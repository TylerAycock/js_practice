// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples:
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

const duplicateEncode = (word) => {
  let lowerCase = word.toLowerCase();
  let counts = new Map();

  for (letter of lowerCase) {
    counts.set(letter, (counts.get(letter) || 0) + 1);
  }
  return lowerCase
    .split("")
    .map((letter) => {
      return counts.get(letter) > 1 ? ")" : "(";
    })
    .join("");
};

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
