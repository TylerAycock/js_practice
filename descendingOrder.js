// Create a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
  return +String(n).split("").sort().reverse().join("");
}

console.log(descendingOrder(15));
console.log(descendingOrder(1021));

// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filterList(l) {
  return l.filter((i) => typeof i == "number");
}

console.log(filterList([1, 2, "a", "b"]));

// Create a function to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function xo(str) {
    
  let letterX = 0;
  let letterO = 0;

  for (const char of str.toLowerCase()) {
    char == "x" ? letterX++ : letterO++;
  }
  return letterX == letterO;
}
console.log(xo("xoxox"));
