// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// examples:
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

const toCamelCase = (str) => {
  let regEx = /[^A-Za-z0-9]/;

  return !str.length
    ? str
    : str
        .split(regEx)
        .map((word, i) => {
          if (i === 0) {
            return word[0] === word[0].toUpperCase()
              ? `${word[0].toUpperCase()}${word.slice(1)}`
              : word;
          }
          return `${word[0].toUpperCase()}${word.slice(1)}`;
        })
        .join("");
};

const toCamelCaseSimplified = (s) => {
    return s.replace(/[^A-Za-z0-9]+(.)?/g, (_,char) => 
    char? char.toUpperCase() : '')
}

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));
// console.log(toCamelCase(""));

console.log(toCamelCaseSimplified("The_Stealth_Warrior"));
