const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split("");

function solution(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (
      (input[i] >= "a" && input[i] < "n") ||
      (input[i] >= "A" && input[i] < "N")
    ) {
      const charNum = input[i].codePointAt(0) + 13;
      result += String.fromCodePoint(charNum);
    } else if (
      (input[i] >= "n" && input[i] <= "z") ||
      (input[i] >= "N" && input[i] <= "Z")
    ) {
      const charNum = input[i].codePointAt(0) - 13;
      result += String.fromCodePoint(charNum);
    } else {
      result += input[i];
    }
  }
  console.log(result);
}

solution(input);
