const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .split("\n");

function solution(input) {
  let result = "";
  for (let i in input) {
    if (input[i] === "") continue;
    const answer = [0, 0, 0, 0];
    const splited = input[i].split("");
    for (let j in splited) {
      if (splited[j] >= "a" && splited[j] <= "z") {
        answer[0]++;
      } else if (splited[j] >= "A" && splited[j] <= "Z") {
        answer[1]++;
      } else if (splited[j] >= "0" && splited[j] <= "9") {
        answer[2]++;
      } else if (splited[j] === " ") {
        answer[3]++;
      }
    }
    result += answer.join(" ") + "\n";
  }
  console.log(result.trim());
}

solution(input);
