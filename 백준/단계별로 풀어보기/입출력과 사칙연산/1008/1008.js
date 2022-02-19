const fs = require('fs');
const path = require('path');
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split(' ');
const A = +input[0];
const B = +input[1];
//    A : 1
//    B : 3

function solution(A, B)
{
    console.log(A / B);
}

solution(A, B);