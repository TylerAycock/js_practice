// Write a function that combines arrays by alternatingly taking elements passed to it.

const combine = (...arrays) => {
  let combo = [];
  let maxLength = 0;

  for (const arr of arrays) {
    maxLength = Math.max(maxLength, arr.length);
  }

  for (let i = 0; i < maxLength; i++) {
    for (const arr of arrays) {
      if (arr.length > i) {
        combo.push(arr[i]);
      }
    }
  }
  return combo;
};

// console.log(combine(["a", "b", "c"], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]
console.log(combine(["a", "b", "c"], [1, 2, 3, 4, 5], [6, 7], [8])); //['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5])
