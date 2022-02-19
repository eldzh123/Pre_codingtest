const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split("\n");
const N = +input[0];
const testCase = [];
for (let i = 1; i < input.length; i++) {
  testCase.push(input[i].split(""));
}
//  N : 5
//  testCase : [['O', 'O', ... , 'O'], ... , ['O', 'O', ... , 'X']]

function solution(N, testCase) {
  for (let i = 0; i < N; i++) {
    let score = 0;
    let bonus = 0;
    for (let j = 0; j < testCase[i].length; j++) {
      if (testCase[i][j] === "X") {
        bonus = 0;
      } else if (testCase[i][j] === "O") {
        bonus++;
        score += bonus;
      }
    }
    console.log(score);
  }
}

solution(N, testCase);
