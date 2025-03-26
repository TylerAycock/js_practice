// Write a function that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  let nonZero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZero] = arr[i];
      nonZero++;
    //   console.log(`At this index ${i}: Non-zero found (${arr[i]}) Array:`, arr);
    } else {
    //   console.log(`At this index ${i}: Zero found. Array:`, arr);
    }
  }

  for (let i = nonZero; i < arr.length; i++) {
    arr[i] = 0;
    // console.log(`Step ${i}: Filling with zero. Array:`, arr);
  }
  return arr;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); //[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
// console.log(moveZeros([0, 1, 0, 3, 12]));
