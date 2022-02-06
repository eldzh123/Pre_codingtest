const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
const N = +input;
//  N : 3

function solution(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += i;
  }
  console.log(sum);
}

solution(N);
