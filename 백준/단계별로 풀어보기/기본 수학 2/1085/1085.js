const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split(" ");
const testCase = {
  x: +input[0],
  y: +input[1],
  w: +input[2],
  h: +input[3],
};

function solution(testCase) {
  const width = testCase.w;
  const height = testCase.h;
  const location = { x: testCase.x, y: testCase.y };
  const distance = [];
  distance.push(width - location.x);
  distance.push(height - location.y);
  distance.push(location.x - 0);
  distance.push(location.y - 0);
  let min = distance[0];
  for (let i = 0; i < distance.length; i++) {
    if (distance[i] < min) {
      min = distance[i];
    }
  }
  console.log(min);
}

solution(testCase);
