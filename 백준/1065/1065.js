const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
const N = +input;

function isHansoo(n) {
  if (n < 100) {
    return true;
  }
  const arr = n.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
  }
  let diff = arr[0] - arr[1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (diff !== arr[i] - arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function solution(N) {
  let result = 0;
  for (let i = 1; i <= N; i++) {
    if (isHansoo(i)) {
      result++;
    }
  }
  console.log(result);
}

solution(N);
