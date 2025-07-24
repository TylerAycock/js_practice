//Given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  let arr = numbers.split(" ");
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

// Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.

function scramble(str, arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let id = arr.indexOf(i);
    newArr.push(str[id]);
  }
  return newArr.join("");
}

console.log(scramble("sc301s", [4, 0, 3, 1, 5, 2])); //"c0s3s1"
console.log(
  scramble("BgLVeuKNqiFhs", [6, 8, 5, 12, 7, 11, 9, 4, 3, 1, 10, 0, 2])
); //hisqNLBegKFuV
