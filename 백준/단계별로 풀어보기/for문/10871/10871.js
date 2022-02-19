const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split("\n");
const arr1 = input[0].split(" ");
const N = +arr1[0];
const X = +arr1[1];
const A = [];

const arr2 = input[1].split(" ");
for (let i = 0; i < arr2.length; i++) {
  A.push(+arr2[i]);
}
/*
    N : 10
    X : 5
    A : [1, 10, 4 ... 7, 6]
*/

function solution(N, X, A) {
  let result = "";
  for (let i = 0; i < N; i++) {
    if (A[i] < X) {
      if (result === "") {
        result += `${A[i]}`;
      } else {
        result += ` ${A[i]}`;
      }
    }
  }
  console.log(result);
}

solution(N, X, A);
