const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split(" ");
const A = BigInt(input[0]);
const B = BigInt(input[1]);

function solution(A, B) {
  const result = (A + B).toString();
  console.log(result);
}

solution(A, B);
