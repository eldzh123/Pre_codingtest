const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");
const N = +input[0];
const numbers = input[1].split(" ");
for (let i = 0; i < N; i++) {
  numbers[i] = +numbers[i];
}

function isPrime(num) {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(N, numbers) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (isPrime(numbers[i])) {
      count++;
    }
  }
  console.log(count);
}

solution(N, numbers);
