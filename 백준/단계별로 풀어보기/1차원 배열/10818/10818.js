const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split("\n");
const N = +input[0];
const arr = input[1].split(" ");

for (let i = 0; i < arr.length; i++) {
  arr[i] = +arr[i];
}
//  N : 5
//  arr : [20, 10 ... , 7]

function solution(N, arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < N; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(`${min} ${max}`);
}

solution(N, arr);
