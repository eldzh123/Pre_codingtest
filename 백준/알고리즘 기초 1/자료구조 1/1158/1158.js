const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split(" ");
const N = +input[0];
const K = +input[1];

function solution(N, K) {
  const arr = [];
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }
  let index = -1;
  let result = "";
  for (let i = 0; i < N; i++) {
    if (result !== "") {
      result += ", ";
    }
    let count = 0;
    while (count < K) {
      index++;
      if (index >= N) {
        index = 0;
      }
      if (arr[index] !== 0) {
        count++;
      }
    }
    result += `${arr[index]}`;
    arr[index] = 0;
  }
  console.log(`<${result}>`);
}

solution(N, K);
