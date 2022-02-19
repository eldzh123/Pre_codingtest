const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split("\n");

const testCase = [];
let i = 0;
let arr = input[i].split(" ");
while (+arr[0] !== 0 || +arr[1] !== 0) {
  const newArr = [];
  newArr.push(+arr[0]);
  newArr.push(+arr[1]);
  testCase.push(newArr);
  i++;
  arr = input[i].split(" ");
}
// [[1, 1], [2, 3] ... , [5, 2]]

function solution(testCase) {
  let result = "";
  let i = 0;
  while (i < testCase.length) {
    const sum = testCase[i][0] + testCase[i][1];
    result += `${sum}\n`;
    i++;
  }
  console.log(result);
}

solution(testCase);
