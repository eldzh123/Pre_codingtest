const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split("\n");
const N = +input[0];
const arr = input[1].split("");
for (let i = 0; i < N; i++) {
  arr[i] = +arr[i];
}
//  N : 5
//  arr : [5, 4, 3, 2, 1]

function solution(N, arr) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

solution(N, arr);
