const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");
const N = +input[0];
const command = [];

for (let i = 1; i <= N; i++) {
  command.push(input[i]);
}

function solution(N, command) {
  const arr = [];
  let result = "";
  for (let i = 0; i < N; i++) {
    const cmd = command[i].split(" ");
    if (cmd[0] === "push") {
      arr.push(cmd[1]);
    } else if (cmd[0] === "size") {
      result += `${arr.length}\n`;
    } else {
      if (arr.length === 0) {
        if (cmd[0] === "empty") {
          result += "1\n";
        } else {
          result += "-1\n";
        }
      } else {
        if (cmd[0] === "pop") {
          result += `${arr.shift()}\n`;
        } else if (cmd[0] === "front") {
          result += `${arr[0]}\n`;
        } else if (cmd[0] === "back") {
          result += `${arr[arr.length - 1]}\n`;
        } else if (cmd[0] === "empty") {
          result += "0\n";
        }
      }
    }
  }
  console.log(result);
}

solution(N, command);
