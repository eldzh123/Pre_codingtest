const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");
const T = +input[0];
const testCase = [];

for (let i = 1; i <= T; i++) {
  testCase.push(input[i]);
}

function solution(T, testCase) {
  let result = "";
  for (let i = 0; i < T; i++) {
    const str = testCase[i].split("");
    let c = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === "(") {
        c++;
      } else if (str[j] === ")") {
        c--;
      }
      if (c < 0) {
        break;
      }
    }
    if (c === 0) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}

solution(T, testCase);
