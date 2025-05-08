// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

// If there is no index that would make this happen, return -1

// Example:
// [1,2,3,4,3,2,1]: returns  3
// [1,100,50,-51,1,1]: returns 1

function findEvenIndex(arr) {
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    let front = arr.slice(i, count).reduce((acc, cur) => acc + cur, 0);
    let back = arr.slice(-i).reduce((acc, cur) => acc + cur, 0);
    console.log(`Front count ${front} back count ${back}`);
    console.log(count);
    if (front === back) {
      return i;
    }
    count += 1;
  }
  return -1;
}

console.log([1, 2, 3, 4, 3, 2, 1].length);

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
