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
  const arr = input[i].split(" ");
  testCase.push(arr);
}

function revString(str) {
  let result = "";
  const splitedStr = str.split("");
  for (let i = splitedStr.length - 1; i >= 0; i--) {
    result += splitedStr[i];
  }
  return result;
}

function solution(T, testCase) {
  let result = "";
  for (let i = 0; i < T; i++) {
    for (let j = 0; j < testCase[i].length; j++) {
      const revStr = revString(testCase[i][j]);
      if (j === testCase[i].length - 1) {
        result += revStr;
      } else {
        result += revStr;
        result += " ";
      }
    }
    result += "\n";
  }
  console.log(result);
}

solution(T, testCase);
