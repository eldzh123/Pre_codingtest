const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");
const N = +input[0];
const cmd = [];
for (let i = 1; i <= N; i++) {
  const command = input[i].split(" ");
  cmd.push(command);
}

function solution(N, cmd) {
  const front = [];
  const back = [];
  let result = "";

  for (let i = 0; i < N; i++) {
    const command = cmd[i][0];
    const value = +cmd[i][1];
    if (command === "push_back") {
      back.push(value);
    } else if (command === "push_front") {
      front.push(value);
    } else if (command === "front") {
      if (front.length === 0) {
        if (back.length === 0) {
          result += `${-1}\n`;
        } else if (back.length > 0) {
          result += `${back[0]}\n`;
        }
      } else if (front.length > 0) {
        result += `${front[front.length - 1]}\n`;
      }
    } else if (command === "back") {
      if (back.length === 0) {
        if (front.length === 0) {
          result += `${-1}\n`;
        } else if (front.length > 0) {
          result += `${front[0]}\n`;
        }
      } else if (back.length > 0) {
        result += `${back[back.length - 1]}\n`;
      }
    } else if (command === "size") {
      result += `${back.length + front.length}\n`;
    } else if (command === "empty") {
      if (front.length === 0 && back.length === 0) {
        result += `${1}\n`;
      } else {
        result += `${0}\n`;
      }
    } else if (command === "pop_front") {
      if (front.length === 0) {
        if (back.length === 0) {
          result += `${-1}\n`;
        } else if (back.length > 0) {
          result += `${back.shift()}\n`;
        }
      } else if (front.length > 0) {
        result += `${front.pop()}\n`;
      }
    } else if (command === "pop_back") {
      if (back.length === 0) {
        if (front.length === 0) {
          result += `${-1}\n`;
        } else if (front.length > 0) {
          result += `${front.shift()}\n`;
        }
      } else if (back.length > 0) {
        result += `${back.pop()}\n`;
      }
    }
  }
  console.log(result);
}

solution(N, cmd);
