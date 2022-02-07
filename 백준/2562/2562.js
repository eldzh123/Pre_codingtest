const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split("\n");
for (let i = 0; i < input.length; i++) {
  input[i] = +input[i];
}
// [3, 29, ... , 85, 61]

function solution(input) {
  let max = input[0];
  let index = 1;
  for (let i = 0; i < input.length; i++) {
    if (max < input[i]) {
      max = input[i];
      index = i + 1;
    }
  }
  console.log(max);
  console.log(index);
}

solution(input);
