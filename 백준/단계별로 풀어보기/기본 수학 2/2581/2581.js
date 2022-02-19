const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");
const M = +input[0];
const N = +input[1];

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

function solution(M, N) {
  let sum = 0;
  let minPrime = -1;
  for (let i = M; i <= N; i++) {
    if (isPrime(i)) {
      sum += i;
      if (minPrime === -1) {
        minPrime = i;
      }
    }
  }
  if (minPrime === -1) {
    console.log(-1);
  } else {
    console.log(sum);
    console.log(minPrime);
  }
}

solution(M, N);
