const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split(" ");
const M = +input[0];
const N = +input[1];

function solution(M, N) {
  const numbers = [];
  for (let i = 0; i <= N; i++) {
    numbers.push(true);
  }
  numbers[0] = false;
  numbers[1] = false;
  for (let i = 2; i * i <= N; i++) {
    if (numbers[i]) {
      for (let j = i * i; j <= N; j += i) {
        numbers[j] = false;
      }
    }
  }
  for (let i = M; i <= N; i++) {
    if (numbers[i]) {
      console.log(i);
    }
  }
}

solution(M, N);
