const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
const N = +input;
//  N : 2

function solution(N) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${N} * ${i} = ${N * i}`);
  }
}

solution(N);
