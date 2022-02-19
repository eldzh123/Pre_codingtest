const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");
const testCase = [];
for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(" ");
  const p = {
    x: +arr[0],
    y: +arr[1],
  };
  testCase.push(p);
}

function notSameNum(arr) {
  if (arr[0] === arr[1]) {
    return arr[2];
  } else if (arr[1] === arr[2]) {
    return arr[0];
  } else if (arr[0] === arr[2]) {
    return arr[1];
  }
}

function solution(testCase) {
  const locXArr = [];
  const locYArr = [];
  for (let i = 0; i < testCase.length; i++) {
    locXArr.push(testCase[i].x);
    locYArr.push(testCase[i].y);
  }
  const x = notSameNum(locXArr);
  const y = notSameNum(locYArr);
  console.log(`${x} ${y}`);
}

solution(testCase);
