// Create a function will break up camel casing, using a space between words.

// initial solution
function breakCamelCase(str) {
  let arr = [];
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      arr.push(str.slice(start, i));
      start = i;
    }
  }
  arr.push(str.slice(start, str.length));
  return arr.join(" ");
}
console.log(breakCamelCase("camelCasingTest"));

console.log(breakCamelCase("camelCasing"));
console.log(breakCamelCase("identifier"));
console.log(breakCamelCase(""));

// simple solution utilizing regex and replace method

function simpleCamelBreak(str) {
  return str.replace(/([A-Z])/g, " $1");
}

console.log(simpleCamelBreak("camelCasingTest"));
