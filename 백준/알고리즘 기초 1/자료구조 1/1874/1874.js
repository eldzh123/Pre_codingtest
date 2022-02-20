const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");
const n = +input[0];
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(+input[i]);
}

function solution(n, arr) {
  const newArr = [0];
  let index = 1;
  let isPossible = true;
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    while (isPossible && newArr[newArr.length - 1] < arr[i]) {
      if (arr[i] < index) {
        result = "NO";
        isPossible = false;
        break;
      }
      newArr.push(index);
      result += "+\n";
      index++;
    }
    while (isPossible && newArr[newArr.length - 1] >= arr[i]) {
      newArr.pop();
      result += "-\n";
    }
  }
  console.log(result);
}

solution(n, arr);
