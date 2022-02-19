const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
const N = +input;

result = "";
function stars(i, j, n) {
  if (i % 3 === 1 && j % 3 === 1) {
    result += " ";
  } else {
    if (n === 1) {
      result += "*";
    } else {
      stars(Math.floor(i / 3), Math.floor(j / 3), Math.floor(n / 3));
    }
  }
}

function solution(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      stars(i, j, N);
    }
    result += "\n";
  }
  console.log(result);
}

solution(N);
