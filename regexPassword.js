// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)

const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

const doTest = (string, expected) => {
  const actual = REGEXP.test(string);

  if (expected == false) {
    return actual == expected
      ? `The regex works this password has FIALED`
      : `Password should FAIL`;
  } else {
    return actual == expected
      ? `The regex works this password has PASSED`
      : `Password should PASS`;
  }
};

console.log(doTest("fjd3IR9", true));
console.log(doTest("ghdfj32", false));
