const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");
const T = +input[0];
const inputTestCase = [];
let index = 1;
for (let i = 1; i <= T; i++) {
  const testCase = {
    k: +input[index],
    n: +input[index + 1],
  };
  inputTestCase.push(testCase);
  index += 2;
}

function solution(T, inputTestCase) {
  for (let i = 0; i < T; i++) {
    const floor = inputTestCase[i].k;
    const roomNum = inputTestCase[i].n;
    const arr = [];
    for (let j = 0; j <= floor; j++) {
      for (let h = 0; h < roomNum; h++) {
        if (j === 0) {
          arr.push(h + 1);
        } else if (h + 1 < roomNum) {
          arr[h + 1] = arr[h] + arr[h + 1];
        }
      }
    }
    console.log(arr[roomNum - 1]);
  }
}

solution(T, inputTestCase);
