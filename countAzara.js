// The Arara is an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

// 1 = anane
// 2 = adak
// 3 = adak anane
// 4 = adak adak
// 5 = adak adak anane
// 6 = adak adak adak
// 7 = adak adak adak anane
// 8 = adak adak adak adak
// Take a given number and return the Arara's equivalent.

function countArara(n) {
  arr = [];

  while (n > 0) {
    if (n >= 2) {
      arr.push("adak");
      n -= 2;
    } else {
      arr.push("anane");
      n -= 1;
    }
  }
  return arr.join(" ");
}

console.log(countArara(8));
