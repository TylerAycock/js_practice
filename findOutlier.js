// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(arr) {
    let evens = [];
    let odds = [];
    arr.forEach((num) => (num % 2 == 0 ? evens.push(num) : odds.push(num)));
    return evens.length == 1 ? evens[0] : odds[0];
}

//console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // -->  11 (the only odd number))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // --> 160 (the only even number)
