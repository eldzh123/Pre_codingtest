const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();

function solution(input) {
  const result = input.codePointAt(0);
  console.log(result);
}

solution(input);
