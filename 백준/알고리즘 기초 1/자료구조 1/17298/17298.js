const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");

const N = +input[0];
const A = [];
const arr = input[1].split(" ");
for (let i = 0; i < N; i++) {
  A.push(+arr[i]);
}

function solution(N, A) {
  const arr = [];
  result = new Array(N).fill(-1);
  for (let i = 0; i < N; i++) {
    while (arr.length > 0 && A[arr[arr.length - 1]] < A[i]) {
      result[arr.pop()] = A[i];
    }
    arr.push(i);
  }
  console.log(result.join(" "));
}

solution(N, A);
