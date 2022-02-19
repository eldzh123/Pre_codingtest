const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");
const T = +input[0];
const testCase = [];
for (let i = 1; i <= T; i++) {
  testCase.push(+input[i]);
}

function getPrimes(num) {
  const primes = [];
  for (let i = 0; i <= num; i++) {
    primes.push(true);
  }
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i * i < num; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= num; j += i) {
        primes[j] = false;
      }
    }
  }
  return primes;
}

function solution(T, testCase) {
  let max = testCase[0];
  for (let i = 0; i < T; i++) {
    if (max < testCase[i]) {
      max = testCase[i];
    }
  }
  const primes = getPrimes(max);
  for (let i = 0; i < T; i++) {
    const arr = [];
    for (let j = 2; j < primes.length; j++) {
      if (primes[j] && primes[testCase[i] - j]) {
        const pair = {
          prime1: j,
          prime2: testCase[i] - j,
          diff: Math.abs(j - (testCase[i] - j)),
        };
        arr.push(pair);
      }
    }
    let min = 10000;
    for (let h = 0; h < arr.length; h++) {
      if (min > arr[h].diff) {
        min = arr[h].diff;
      }
    }
    for (let h = 0; h < arr.length; h++) {
      if (min === arr[h].diff) {
        if (arr[h].prime1 < arr[h].prime2) {
          console.log(`${arr[h].prime1} ${arr[h].prime2}`);
        } else {
          console.log(`${arr[h].prime2} ${arr[h].prime1}`);
        }
        break;
      }
    }
  }
}

solution(T, testCase);
