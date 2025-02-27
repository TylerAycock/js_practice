// Create a funciton that splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

const splitString = (str) => {
  let arr = [];
  for (let i = 0; i < str.length; i += 2) {
    let second = str[i + 1] || "_";
    arr.push(str[i] + second);
  }

  return arr;
};

console.log(splitString("abc"));
