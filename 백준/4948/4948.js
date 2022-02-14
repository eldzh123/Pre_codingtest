const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");

let i = 0;
while (+input[i] !== 0) {
  input[i] = +input[i];
  i++;
}
input[input.length - 1] = 0;

function getPrimes(max) {
  const primes = [];
  for (let i = 0; i < max * 2; i++) {
    primes.push(true);
  }
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i * i <= max * 2; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= max * 2; j += i) {
        primes[j] = false;
      }
    }
  }
  return primes;
}

function solution(input) {
  let max = input[0];
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] > max) {
      max = input[i];
    }
  }
  const primes = getPrimes(max);
  for (let i = 0; i < input.length - 1; i++) {
    const n = input[i];
    let count = 0;
    for (let j = n + 1; j <= n * 2; j++) {
      if (primes[j]) {
        count++;
      }
    }
    console.log(count);
  }
}

solution(input);
