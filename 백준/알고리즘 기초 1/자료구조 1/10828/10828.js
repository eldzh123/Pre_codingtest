const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");
const N = +input[0];
const testCase = [];
for (let i = 1; i <= N; i++) {
  arr = input[i].split(" ");
  testCase.push(arr);
}

function solution(N, testCase) {
  const stack = [];
  let result = "";
  for (let i = 0; i < N; i++) {
    const command = testCase[i][0];
    if (command === "push") {
      stack.push(+testCase[i][1]);
    } else if (command === "pop") {
      if (stack.length === 0) {
        result += "-1\n";
      } else {
        result += `${stack.pop()}\n`;
      }
    } else if (command === "size") {
      result += `${stack.length}\n`;
    } else if (command === "empty") {
      if (stack.length === 0) {
        result += "1\n";
      } else {
        result += "0\n";
      }
    } else if (command === "top") {
      if (stack.length === 0) {
        result += "-1\n";
      } else {
        result += `${stack[stack.length - 1]}\n`;
      }
    }
  }
  console.log(result);
}

solution(N, testCase);
