const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
const N = +input;
// N : 5

function solution(N) {
  let result = "";
  for (let i = 0; i < N; i++) {
    let stars = "";
    let blank = "";
    for (let h = 0; h < N - i - 1; h++) {
      blank += " ";
    }
    for (let j = 0; j <= i; j++) {
      stars += "*";
    }
    result += blank + stars + "\n";
  }
  console.log(result);
}

solution(N);
