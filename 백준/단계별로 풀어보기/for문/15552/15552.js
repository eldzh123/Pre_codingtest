const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split("\n");
const C = +input[0];
const testCase = [];

for (let i = 1; i < input.length; i++) {
  const arr = input[i].split(" ");
  const newArr = [];
  for (let j = 0; j < arr.length; j++) {
    newArr.push(+arr[j]);
  }
  testCase.push(newArr);
}
//  C : 5
//  testCase : [[1, 1] ... [5, 2]]

function solution(C, testCase) {
  let sum = "";
  for (let i = 0; i < C; i++) {
    sum += `${testCase[i][0] + testCase[i][1]}\n`;
  }
  console.log(sum);
}

solution(C, testCase);
