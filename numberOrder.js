// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Example:
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"


//original solution 

// const order = (s) => {
//   let obj = {};
//   let answer = [];
//   s.split(" ").map((word) => {
//     word.split("").forEach((letter) => {
//       if (+letter + 1 > 1) {
//         obj[letter] = word;
//       }
//     });
//   });

//   for (words in obj) {
//     answer.push(obj[words]);
//   }
//   return answer.join(" ");
// };

//efficient solution
//using the sort method and the built in compareFn. We then use parseInt and the "find digit" RegEx to identify and pull out the number then compare them to properly sort 

const order = (s) => {
  return s.split(" ").sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  }).join(" ");
};

console.log(order("is2 Thi1s T4est 3a"));
