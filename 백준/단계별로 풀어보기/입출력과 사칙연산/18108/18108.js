const fs = require('fs');
const path = require('path');
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = +input;
//    input : 2541

function solution(input)
{
    console.log(input - 543);
}

solution(input);