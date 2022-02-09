const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split(" ");

function solution(input) {
  const arr = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== "") {
      arr.push(input[i]);
    }
  }
  console.log(arr.length);
}

solution(input);
