const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");
const T = +input[0];
const inputTestCase = [];
for (let i = 1; i <= T; i++) {
  const arr = input[i].split(" ");
  testCase = {
    x: +arr[0],
    y: +arr[1],
  };
  inputTestCase.push(testCase);
}

function solution(T, inputTestCase) {
  for (let i = 0; i < T; i++) {
    let result = 0;
    const x = inputTestCase[i].x;
    const y = inputTestCase[i].y;
    if (Math.sqrt(y - x) % 1 === 0) {
      result = Math.ceil(Math.sqrt(y - x)) * 2 - 1;
    } else {
      const a = Math.pow(Math.ceil(Math.sqrt(y - x)), 2);
      const b = Math.pow(Math.ceil(Math.sqrt(y - x)) - 1, 2) + 1;
      if ((a + b) / 2 <= y - x) {
        result = Math.ceil(Math.sqrt(y - x)) * 2 - 1;
      } else {
        result = Math.ceil(Math.sqrt(y - x)) * 2 - 2;
      }
    }
    console.log(result);
  }
}

solution(T, inputTestCase);
