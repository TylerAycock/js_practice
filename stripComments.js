// Create a function that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

function solution(text, markers) {
  const lines = text.split("\n");

  const resultLines = lines.map((line) => {
    for (const marker of markers) {
      const markerIndex = line.indexOf(marker);
      if (markerIndex !== -1) {
        line = line.substring(0, markerIndex); // Remove everything after the marker
        break; // Stop checking markers for this line
      }
    }
    return line.trimEnd(); // Remove trailing whitespace
  });

  return resultLines.join("\n");
}

console.log(
  solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
); // 'aa'
// console.log(solution('#aa bb\ncc dd', ['#'])) // '\ncc dd'
