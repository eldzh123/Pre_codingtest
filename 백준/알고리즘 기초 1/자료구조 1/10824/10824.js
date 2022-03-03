const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split(" ");
const A = input[0];
const B = input[1];
const C = input[2];
const D = input[3];

function solution(A, B, C, D) {
  const num1 = +(A + B);
  const num2 = +(C + D);
  console.log(num1 + num2);
}

solution(A, B, C, D);
