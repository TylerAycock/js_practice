// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

// If there is no index that would make this happen, return -1

// Example:
// [1,2,3,4,3,2,1]: returns  3
// [1,100,50,-51,1,1]: returns 1

function findEvenIndex(arr) {
  let totalSum = arr.reduce((acc, cur) => acc + cur, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let rightSum = totalSum - leftSum - arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

console.log([1, 2, 3, 4, 3, 2, 1].slice(0));

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
