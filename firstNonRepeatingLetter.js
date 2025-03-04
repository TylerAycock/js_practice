// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

//This first solution utilizes a nested for loop which for larger strings is inefficient 

function firstNonRepeatingLetterLoop(s) {
  for (let i = 0; i < s.length; i++) {
    let isRepeating = false;
    for (let x = 0; x < s.length; x++) {
      if (i !== x && s.toLowerCase()[i] === s.toLowerCase()[x]) {
        isRepeating = true;
        break;
      }
    }
    if (!isRepeating) {
      return s[i];
    }
  }
  return "";
}


//This second solution creates an obj containing a count of each character and then does one loop to find the first instance of a unique character

const firstNonRepeatingLetter = (s) => {
  let lowerCase = s.toLowerCase();
  let characters = {};

  for (let char of lowerCase) {
    characters[char] = (characters[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (characters[lowerCase[i]] === 1) {
      return s[i];
    }
  }
  return "";
};


console.log(firstNonRepeatingLetterLoop("sTress"))
console.log(firstNonRepeatingLetter("sTress"));
