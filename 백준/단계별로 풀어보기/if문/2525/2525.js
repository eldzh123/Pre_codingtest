const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");
const time = input[0].split(" ");
const A = +time[0];
const B = +time[1];
const C = +input[1];

function solution(A, B, C) {
  let total_min = A * 60 + B + C;
  let hour = Math.floor(total_min / 60);
  if (hour >= 24) {
    hour -= 24;
    total_min -= 24 * 60;
  }
  const min = total_min - hour * 60;
  console.log(`${hour} ${min}`);
}

solution(A, B, C);
