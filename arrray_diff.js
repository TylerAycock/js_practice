// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

// example:
// If a = [1, 2] and b = [1], the result should be [2].

const arrayDiff = (a, b) => {
  if (b.length == 0) {
    return a;
  }
  return a.filter((letter) => !b.includes(letter));
};

// console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
// console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2], []));
