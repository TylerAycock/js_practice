// We are given two arrays of integers A and B and we have to output a sorted array with the integers that fulfill the following constraints:

// they are present in both ones

// they occur more than once in A and more than once in B

// their values are within a given range (inclusive)

// they are odd or even according as it is requested

// Example:
// arrA = [1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3]
// arrB = [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0]
// rng = [-4, 4] # is the range of the integers from -4 to 4 (inclusive)
// wanted = "odd"

// 0, 1, 2, 3, 7, are the numbers present in arrA and arrB
// 1, 2, 3, 7,  occur twice or more in arrA and arrB
// 1, 2, 3,  are in the range [-4, 4]
// 1, 3, are odd
// output = [1, 3]

function findArr(arrA, arrB, rng, wanted) {
  let comboArr = [...arrA, ...arrB];
  let obj = {};
  let filterArr = [];

  for (let i = 0; i < comboArr.length; i++) {
    obj[comboArr[i]] ? obj[comboArr[i]]++ : (obj[comboArr[i]] = 1);

    if (
      obj[comboArr[i]] >= 4 &&
      !filterArr.includes(comboArr[i]) &&
      comboArr[i] >= rng[0] &&
      comboArr[i] <= rng[1]
    ) {
      filterArr.push(comboArr[i]);
    }
  }
  return (
    wanted == "even"
      ? filterArr.filter((num) => num % 2 === 0).sort()
      : filterArr.filter((num) => num % 2 == 1)
  ).sort();
}

// let arr1 = [1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3];
// let arr2 = [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0];
// let rng = [-4, 4];
// let wanted = "odd";
// console.log(findArr(arr1, arr2, rng, wanted));

let arrA = [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4];
let arrB = [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4];
let rng = [-4, 4];
let wanted = "even";

const findArrayOptimized = (arrA, arrB, rng, wanted) => {
  let comboArr = [...arrA, ...arrB];
  let counts = new Map();
  let filterSet = new Set();

  for (let num of comboArr) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  for (let num of comboArr) {
    if (counts.get(num) >= 4 && num >= rng[0] && num <= rng[1]) {
      if (wanted == "even" && num % 2 == 0) {
        filterSet.add(num);
      }
      if (wanted == "odd" && num % 2 == 1) {
        filterSet.add(num);
      }
    }
  }

  return [...filterSet].sort();
};

// console.log(findArrayOptimized(arrA, arrB, rng, wanted), [0, 2, 4]);

const findArrayAlternate = (arrA, arrB, rng, wanted) => {
  let countsA = new Map();
  let countsB = new Map();
  const commonElements = new Set();

  for (const num of arrA) {
    countsA.set(num, (countsA.get(num) || 0) + 1);
  }

  for (const num of arrB) {
    countsB.set(num, (countsB.get(num) || 0) + 1);
  }

  for (const num of arrA) {
    if (
      countsB.has(num) &&
      countsA.get(num) > 1 &&
      countsB.get(num) > 1 &&
      num >= rng[0] &&
      num <= rng[1]
    ) {
      if (wanted === "odd" && num % 2 === 1) {
        commonElements.add(num);
      } else if (wanted === "even" && num % 2 === 0) {
        commonElements.add(num);
      }
    }
  }

  return [...commonElements].sort((a, b) => a - b);
};

console.log(findArrayAlternate(arrA, arrB, rng, wanted), [0, 2, 4]);