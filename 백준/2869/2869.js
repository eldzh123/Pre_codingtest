const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split(" ");
const A = +input[0];
const B = +input[1];
const V = +input[2];

function solution(A, B, V) {
  console.log(Math.ceil((V - A) / (A - B)) + 1);
}

solution(A, B, V);
