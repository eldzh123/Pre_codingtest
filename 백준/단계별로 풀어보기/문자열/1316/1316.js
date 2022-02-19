const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("\n");
const N = +input[0];
const strs = [];

for (let i = 1; i < input.length; i++) {
  strs.push(input[i]);
}
//  N : 3
//  strs : ['aba', 'abab', 'abcabc', 'a']

function isGroupNum(index, arr) {
  const char = arr[index];
  let anotherChar = 0;
  for (let i = index; i < arr.length; i++) {
    if (char === arr[i] && anotherChar === 1) {
      return false;
    }
    if (char !== arr[i]) {
      anotherChar = 1;
    }
  }
  return true;
}

function solution(N, strs) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    const arr = strs[i].split("");
    const c = "";
    for (let j = 0; j < arr.length; j++) {
      if (c === arr[j]) {
        continue;
      }
      if (isGroupNum(j, arr)) {
        const c = arr[j];
      } else {
        count--;
        break;
      }
    }
    count++;
  }
  console.log(count);
}

solution(N, strs);
