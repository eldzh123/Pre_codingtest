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
    H: +arr[0],
    W: +arr[1],
    N: +arr[2],
  };
  inputTestCase.push(testCase);
}

function solution(T, inputTestCase) {
  for (let i = 0; i < T; i++) {
    let floor = inputTestCase[i].N % inputTestCase[i].H;
    if (floor === 0) {
      floor = inputTestCase[i].H;
    }
    const roomNum = Math.ceil(inputTestCase[i].N / inputTestCase[i].H);
    const roomNumLen = roomNum.toString().split("").length;
    if (roomNumLen === 1) {
      console.log(`${floor}0${roomNum}`);
    } else if (roomNumLen === 2) {
      console.log(`${floor}${roomNum}`);
    }
  }
}

solution(T, inputTestCase);
