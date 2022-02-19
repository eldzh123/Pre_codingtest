const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split(" ");

function solution(input) {
  const arr = [];
  for (let i = 0; i < input.length; i++) {
    const newArr = input[i].split("");
    let start = 0;
    let end = newArr.length - 1;
    while (start < end) {
      let temp = "";
      temp = newArr[start];
      newArr[start] = newArr[end];
      newArr[end] = temp;
      start++;
      end--;
    }
    arr.push(newArr.join(""));
  }
  if (arr[0] > arr[1]) {
    console.log(arr[0]);
  } else {
    console.log(arr[1]);
  }
}

solution(input);
