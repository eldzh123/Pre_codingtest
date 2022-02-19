const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");
const T = +input[0];
const inputTestCase = [];
for (let i = 1; i <= T; i++) {
  const arr = input[i].split(" ");
  const testCase = {
    pos1: {
      x: +arr[0],
      y: +arr[1],
    },
    r1: +arr[2],
    pos2: {
      x: +arr[3],
      y: +arr[4],
    },
    r2: +arr[5],
  };
  inputTestCase.push(testCase);
}

function getDistance(pos1, pos2) {
  const d = (pos1.x - pos2.x) ** 2 + (pos1.y - pos2.y) ** 2;
  return d;
}

function solution(T, inputTestCase) {
  for (let i = 0; i < T; i++) {
    const middleD = getDistance(inputTestCase[i].pos1, inputTestCase[i].pos2);
    const sumR = (inputTestCase[i].r1 + inputTestCase[i].r2) ** 2;
    const diffR = (inputTestCase[i].r1 - inputTestCase[i].r2) ** 2;
    if (middleD === 0) {
      if (inputTestCase[i].r1 === inputTestCase[i].r2) {
        console.log(-1);
      } else {
        console.log(0);
      }
    } else {
      if (diffR === middleD || sumR === middleD) {
        console.log(1);
      } else if (sumR < middleD || diffR > middleD) {
        console.log(0);
      } else if (sumR > middleD) {
        console.log(2);
      }
    }
  }
}

solution(T, inputTestCase);
