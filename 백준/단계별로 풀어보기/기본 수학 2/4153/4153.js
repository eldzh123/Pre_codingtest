const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");
const inputTestCase = [];
for (let i = 0; i < input.length - 1; i++) {
  const arr = input[i].split(" ");
  const testCase = {
    num1: +arr[0],
    num2: +arr[1],
    num3: +arr[2],
  };
  inputTestCase.push(testCase);
}

function solution(inputTestCase) {
  for (let i = 0; i < inputTestCase.length; i++) {
    const numArr = [];
    numArr.push(inputTestCase[i].num1);
    numArr.push(inputTestCase[i].num2);
    numArr.push(inputTestCase[i].num3);
    let max = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
      if (numArr[i] > max) {
        max = numArr[i];
      }
    }
    const H = max;
    let P = 0;
    let B = 0;
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] !== max) {
        if (P === 0) {
          P = numArr[i];
        } else {
          B = numArr[i];
        }
      }
    }
    if (H >= P + B) {
      console.log("wrong");
    } else {
      if (P ** 2 + B ** 2 === H ** 2) {
        console.log("right");
      } else {
        console.log("wrong");
      }
    }
  }
}

solution(inputTestCase);
