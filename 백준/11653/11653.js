const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
const N = +input;

function solution(N) {
  if (N === 1) {
    return;
  }
  let i = 2;
  while (N !== 1) {
    if (N % i === 0) {
      N /= i;
      console.log(i);
    } else {
      i++;
    }
  }
}

solution(N);
