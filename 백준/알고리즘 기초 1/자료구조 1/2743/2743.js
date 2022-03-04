const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();

function solution(input) {
  console.log(input.length);
}

solution(input);
