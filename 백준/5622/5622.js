const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();

function solution(input) {
  const arr = input.split("");
  let time = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].codePointAt(0) <= "C".codePointAt(0)) {
      time += 3;
    } else if (arr[i].codePointAt(0) <= "F".codePointAt(0)) {
      time += 4;
    } else if (arr[i].codePointAt(0) <= "I".codePointAt(0)) {
      time += 5;
    } else if (arr[i].codePointAt(0) <= "L".codePointAt(0)) {
      time += 6;
    } else if (arr[i].codePointAt(0) <= "O".codePointAt(0)) {
      time += 7;
    } else if (arr[i].codePointAt(0) <= "S".codePointAt(0)) {
      time += 8;
    } else if (arr[i].codePointAt(0) <= "V".codePointAt(0)) {
      time += 9;
    } else if (arr[i].codePointAt(0) <= "Z".codePointAt(0)) {
      time += 10;
    }
  }
  console.log(time);
}

solution(input);
