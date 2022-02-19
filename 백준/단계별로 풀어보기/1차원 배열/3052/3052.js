const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");
for (let i = 0; i < input.length; i++) {
  input[i] = +input[i];
}
//  [1, 2, 3, .... , 9, 10]

function solution(input) {
  const remainder = [];
  remainder.push(input[0] % 42);
  for (let i = 0; i < input.length; i++) {
    const remainder_input = input[i] % 42;
    let is_have = 0;
    for (let j = 0; j < remainder.length; j++) {
      if (remainder[j] === remainder_input) {
        is_have = 1;
        break;
      }
    }
    if (is_have === 0) {
      remainder.push(remainder_input);
    }
  }
  console.log(remainder.length);
}

solution(input);
