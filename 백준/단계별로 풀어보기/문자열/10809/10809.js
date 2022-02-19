const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split("");

function solution(input) {
  const arr = [];
  for (let i = 0; i < 26; i++) {
    arr.push(-1);
  }
  for (let i = 0; i < input.length; i++) {
    const askii = input[i].codePointAt(0);
    const askii_a = "a".codePointAt(0);
    if (arr[askii - askii_a] === -1) {
      arr[askii - askii_a] = i;
    }
  }
  let result = "";
  result += arr[0];
  for (let i = 1; i < arr.length; i++) {
    result += ` ${arr[i]}`;
  }
  console.log(result);
}

solution(input);
