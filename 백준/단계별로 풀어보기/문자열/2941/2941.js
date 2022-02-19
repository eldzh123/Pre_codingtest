const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("");

function isNotCountedIndex(n, index) {
  for (let i = 0; i < index.length; i++) {
    if (n === index[i]) {
      return false;
    }
  }
  return true;
}

function solution(input) {
  let count = 0;
  const index = [];
  let length = 0;
  const croatia = ["c=", "c-", "d-", "lj", "nj", "s=", "z="];
  for (let i = 0; i < input.length - 2; i++) {
    const str3 = input[i] + input[i + 1] + input[i + 2];
    if (str3 === "dz=") {
      index.push(i);
      index.push(i + 1);
      index.push(i + 2);
      count++;
      length += 3;
    }
  }
  for (let i = 0; i < input.length - 1; i++) {
    if (isNotCountedIndex(i, index) && isNotCountedIndex(i + 1, index)) {
      const str = input[i] + input[i + 1];
      for (let j = 0; j < croatia.length; j++) {
        if (str === croatia[j]) {
          count++;
          length += 2;
        }
      }
    }
  }
  count += input.length - length;
  console.log(count);
}

solution(input);
