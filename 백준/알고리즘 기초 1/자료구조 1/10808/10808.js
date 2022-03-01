const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("");

function solution(input) {
  const arr = new Array(26).fill(0);
  let result = "";
  for (let i = 0; i < input.length; i++) {
    const index = input[i].codePointAt(0) - "a".codePointAt(0);
    arr[index]++;
  }
  for (let i = 0; i < arr.length; i++) {
    if (result) {
      result += " ";
    }
    result += `${arr[i]}`;
  }
  console.log(result);
}

solution(input);
