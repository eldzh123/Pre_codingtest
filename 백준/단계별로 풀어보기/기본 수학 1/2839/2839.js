const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
const N = +input;

function solution(N) {
  const five = Math.floor(N / 5);
  for (let i = five; i >= 0; i--) {
    let num = N;
    num -= 5 * i;
    if (num % 3 === 0) {
      const tree = num / 3;
      console.log(i + tree);
      return;
    }
  }
  console.log(-1);
}

solution(N);
