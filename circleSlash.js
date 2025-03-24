// Suppose there are n people standing in a circle and they are numbered 1 through n in order.

// Person 1 starts off with a sword and kills person 2. He then passes the sword to the next person still standing, in this case person 3. Person 3 then uses the sword to kill person 4, and passes it to person 5. This pattern continues around and around the circle until just one person remains.

// What is the index of this person?

function circleSlash(n) {
  let circle = [];
  let index = 0;

  for (let i = 1; i <= n; i++) {
    circle.push(i);
  }

  while (circle.length > 1) {
    index = (index + 1) % circle.length;
    circle.splice(index, 1);
  }

  return circle[0];
}

console.log(circleSlash(5)); //the index of the last person is 3
