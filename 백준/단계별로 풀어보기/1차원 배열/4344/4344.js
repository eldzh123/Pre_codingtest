const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split("\n");
const C = +input[0];
const inputTestCase = [];

for (let i = 1; i <= C; i++) {
  const arr = input[i].split(" ");
  const newArr = [];
  for (let j = 0; j < arr.length; j++) {
    arr[j] = +arr[j];
    if (j > 0) {
      newArr.push(arr[j]);
    }
  }
  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  inputTestCase.push(testCase);
}
/*
    { N : 5, arr : [50, 50, ... , 100] },
    ...
    { N : 3, arr : [70, 90, 81] }
*/

function solution(C, inputTestCase) {
  for (let i = 0; i < C; i++) {
    let average = 0;
    let sum = 0;
    let getHighScore = 0;
    for (let j = 0; j < inputTestCase[i].N; j++) {
      sum += inputTestCase[i].arr[j];
    }
    average = sum / inputTestCase[i].N;
    for (let j = 0; j < inputTestCase[i].N; j++) {
      if (average < inputTestCase[i].arr[j]) {
        getHighScore++;
      }
    }
    const rate = ((getHighScore / inputTestCase[i].N) * 100).toFixed(3);
    console.log(`${rate}%`);
  }
}

solution(C, inputTestCase);
