const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
const R = +input;

function solution(R) {
  const euclid = R ** 2 * Math.PI;
  const taxi = R ** 2 * 2;
  console.log(euclid.toFixed(6));
  console.log(taxi.toFixed(6));
}

solution(R);
