/*
find the two entries that sum to 2020 and then multiply those two numbers together.
Of course, your expense report is much larger. Find the two entries that sum to 2020;
what do you get if you multiply them together?
*/
function findTwoNumbers(i, j) {
  for (i of inputNumbers) {
    for (j of inputNumbers) {
      if (i + j === 2020) {
        console.log (i * j)
      }
    }
  }
};

const inputNumbers = require ('/Users/lnicola/Documents/GitHub/my-first-advent-of-code-javascript-2020/github/day-01/input-data.js');
findTwoNumbers(inputNumbers);

function findThreeNumbers(i, j, k) {
  for (i of inputNumbers) {
    for (j of inputNumbers) {
      for (k of inputNumbers) {
      if (i + j + k === 2020) {
        console.log (i * j * k)
      }
    }
  }
  }
};
findThreeNumbers(inputNumbers);
