// Write a function which will reverse the case of all consecutive duplicate letters in a string. That is, any letters that occur one after the other and are identical.

// If the duplicate letters are lowercase then they must be set to uppercase, and if they are uppercase then they need to be changed to lowercase.

//Initial Answser

const reverseCase = (s) => {
    let split = s.split("");
    let answer = [];
  
    for (let i = 0; i < split.length; i++) {
      if (split[i] === split[i + 1] || split[i] === split[i - 1]) {
        if (/[A-Z]/.test(split[i])) {
          answer.push(split[i].toLowerCase());
        } else {
          answer.push(split[i].toUpperCase());
        }
      } else {
        answer.push(split[i]);
      }
    }
  
    return answer.join("");
  };

// console.log(reverseCase("shhhh")); // Output: sHHHH

// More efficient Answer:

function reverseCaseSimplified(s) {
    var ans=''
    for (var i=0; i<s.length; ++i)
      if (s[i]==s[i+1]||s[i]==s[i-1])
        if (s[i]==s[i].toLowerCase())
          ans+=s[i].toUpperCase();
        else
          ans+=s[i].toLowerCase();
      else
        ans+=s[i];
    return ans;
  }
