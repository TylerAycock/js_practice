// Sentence Calculator
// Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

// Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
// Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
// Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
// Other characters: 0 value
// Note: input will always be a string

function charToValue(s) {
  let count = 0;
  s.split("").map((char) => {
    if (char >= "a" && char <= "z") {
      count += char.charCodeAt(0) - "a".charCodeAt(0) + 1;
    } else if (char >= "A" && char <= "Z") {
      count += (char.charCodeAt(0) - "A".charCodeAt(0) + 1) * 2;
    } else if (char >= "0" && char <= "9") {
      count += parseInt(char);
    } else {
      return null; // Handle invalid characters
    }
  });

  return count
}

console.log(charToValue("I Love You"));

console.log("d".charCodeAt(0))
