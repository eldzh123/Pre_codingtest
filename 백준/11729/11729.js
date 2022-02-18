const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
const N = +input;
let number = 0;
let result = "";

function hanoi(N, from, to, other) {
  if (N === 0) {
    return;
  }
  hanoi(N - 1, from, other, to);
  result += `${from} ${to}\n`;
  number++;
  hanoi(N - 1, other, to, from);
}

function solution(N) {
  hanoi(N, 1, 3, 2);
  console.log(number);
  console.log(result);
}

solution(N);
