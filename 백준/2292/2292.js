const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
const N = +input;

function solution(N) {
  let range = 1;
  let block = 1;

  while (block < N) {
    block += 6 * range;
    range++;
  }
  console.log(range);
}

solution(N);
