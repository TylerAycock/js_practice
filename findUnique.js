// There is an array with some numbers. All numbers are equal except for one. Try to find it

function findUnique(arr) {
  let unique = {};
  for (const num of arr) {
    unique[num] ? unique[num]++ : (unique[num] = 1);
  }
  for (nums in unique) {
    if (unique[nums] === 1) {
      return +nums;
    }
  }
}

console.log(findUnique([1, 1, 1, 2, 1, 1]));
