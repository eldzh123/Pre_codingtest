const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
const N = +input;
//  N : 5

function solution(N) {
  let sum = "";
  for (let i = 1; i <= N; i++) {
    sum += `${i}\n`;
  }
  console.log(sum);
}

solution(N);
