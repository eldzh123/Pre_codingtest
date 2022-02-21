const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");

const str = input[0];
const M = +input[1];
const command = [];
for (let i = 2; i <= M + 1; i++) {
  const arr = input[i].split(" ");
  command.push(arr);
}

function solution(str, M, command) {
  const lStack = str.split("");
  const rStack = [];
  for (let i = 0; i < M; i++) {
    if (command[i][0] === "L" && lStack.length > 0) {
      rStack.push(lStack.pop());
    } else if (command[i][0] === "D" && rStack.length > 0) {
      lStack.push(rStack.pop());
    } else if (command[i][0] === "B") {
      lStack.pop();
    } else if (command[i][0] === "P") {
      lStack.push(command[i][1]);
    }
  }
  let result = "";
  for (let i = 0; i < lStack.length; i++) {
    result += lStack[i];
  }
  for (let i = rStack.length - 1; i >= 0; i--) {
    result += rStack[i];
  }
  console.log(result);
}

solution(str, M, command);
