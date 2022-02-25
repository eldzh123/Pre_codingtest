const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("");

function solution(input) {
  var arr = [];
  var result = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      arr.push(input[i]);
    } else if (input[i] === ")") {
      if (input[i - 1] === "(") {
        arr.pop();
        result += arr.length;
      } else if (input[i - 1] === ")") {
        arr.pop();
        result++;
      }
    }
  }
  console.log(result);
}

solution(input);
