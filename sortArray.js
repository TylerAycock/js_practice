// Given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(arr) {
  let odd = arr.filter((num) => num % 2).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      arr[i] = odd.shift();
    }
  }
  return arr;
}

console.log(sortArray([11, 5, 8, 6, 3, 4]));
console.log(sortArray([5, 3, 2, 8, 1, 4]));
