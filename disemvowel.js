//Write a function that takes a string and return a new string with all vowels removed.

//EX:the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .map((letter) => (vowels.includes(letter.toLowerCase()) ? "" : letter))
    .join("");
}

const disemvowelImproved = (str) => str.replace(/[aeiouAEIOU]/g, "");

console.log(
  disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!"
);
