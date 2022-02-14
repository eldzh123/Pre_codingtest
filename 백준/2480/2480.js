const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split(" ");
const first = +input[0];
const second = +input[1];
const third = +input[2];

function solution(first, second, third) {
  if (first === second && first === third) {
    console.log(10000 + first * 1000);
  } else if (first === second) {
    console.log(1000 + first * 100);
  } else if (first === third) {
    console.log(1000 + first * 100);
  } else if (second === third) {
    console.log(1000 + second * 100);
  } else {
    if (first > second) {
      if (third > first) {
        console.log(third * 100);
      } else {
        console.log(first * 100);
      }
    } else if (second > third) {
      if (first > second) {
        console.log(first * 100);
      } else {
        console.log(second * 100);
      }
    } else if (third > first) {
      if (second > third) {
        console.log(second * 100);
      } else {
        console.log(third * 100);
      }
    }
  }
}

solution(first, second, third);
