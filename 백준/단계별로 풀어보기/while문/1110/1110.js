const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = +input;
//  input    : 26

function solution(input) {
  let number = -1;
  let i = 0;
  let digit_10 = Math.floor(input / 10);
  let digit_1 = input % 10;
  while (number !== input) {
    let sum = digit_10 + digit_1;
    if (sum >= 10) {
      sum = sum % 10;
    }
    number = digit_1 * 10 + sum;
    digit_10 = Math.floor(number / 10);
    digit_1 = number % 10;
    i++;
  }
  console.log(i);
}

solution(input);
