const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split(" ");
const A = +input[0];
const B = +input[1];
const C = +input[2];

function solution(A, B, C) {
  if (B >= C) {
    console.log(-1);
    return;
  }
  const fixedCost = A;
  const income = C - B;
  const result = Math.floor(fixedCost / income + 1);
  console.log(result);
}

solution(A, B, C);
