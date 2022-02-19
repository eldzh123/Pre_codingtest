const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split("\n");
const N = +input[0];
const scores = input[1].split(" ");
for (let i = 0; i < scores.length; i++) {
  scores[i] = +scores[i];
}
// N : 3
// scores : [40, 80, 60]

function solution(N, scores) {
  let sum = 0;
  let max = scores[0];
  let result = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
    if (max < scores[i]) {
      max = scores[i];
    }
  }
  result = ((sum / max) * 100) / N;
  console.log(result);
}

solution(N, scores);
