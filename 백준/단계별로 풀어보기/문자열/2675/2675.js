const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split("\n");
const T = +input[0];
const inputTestCase = [];

for (let i = 1; i < input.length; i++) {
  const arr = input[i].split(" ");
  const testCase = {
    R: +arr[0],
    S: arr[1],
  };
  inputTestCase.push(testCase);
}
//  [{R : 3, S : 'ABC'}, {R : 5, S : '/HTP'}]

function solution(T, inputTestCase) {
  for (let i = 0; i < T; i++) {
    let str = "";
    for (let h = 0; h < inputTestCase[i].S.length; h++) {
      for (let j = 0; j < inputTestCase[i].R; j++) {
        str += inputTestCase[i].S[h];
      }
    }
    console.log(str);
  }
}

solution(T, inputTestCase);
