const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split("\n");
for (let i = 0; i < input.length; i++) {
  input[i] = +input[i];
}

function solution(input) {
  const number = input[0] * input[1] * input[2];
  const number_arr = number.toString().split("");
  for (let i = 0; i < 10; i++) {
    let amount = 0;
    for (let j = 0; j < number_arr.length; j++) {
      if (i == number_arr[j]) {
        amount++;
      }
    }
    console.log(amount);
  }
}

solution(input);
