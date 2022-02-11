const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
const X = +input;

function solution(X) {
  let bunmo = 1;
  let bunja = 1;
  let upward = true;
  for (let i = 1; i < X; i++) {
    if (upward) {
      if (bunja === 1) {
        bunmo++;
        upward = false;
      } else {
        bunja--;
        bunmo++;
      }
    } else {
      if (bunmo === 1) {
        bunja++;
        upward = true;
      } else {
        bunja++;
        bunmo--;
      }
    }
  }
  console.log(`${bunja}/${bunmo}`);
}

solution(X);
