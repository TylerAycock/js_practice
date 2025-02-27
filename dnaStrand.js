// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand(dna) {
  let obj = {
    T: "A",
    A: "T",
    C: "G",
    G: "C",
  };

  return dna
    .split("")
    .map((letter) => {
      return (letter = obj[letter]);
    })
    .join("");
}

console.log(dnaStrand("AAAA")); //;
// console.log(dnaStrand("ATTGC"), "TAACG", "String ATTGC is");
