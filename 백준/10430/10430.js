const fs = require('fs');
const path = require('path');
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split(' ');
const A = +input[0];
const B = +input[1];
const C = +input[2];
//    A : 5
//    B : 8
//    C : 4

function solution(A, B, C)
{
    console.log((A + B) % C);
    console.log(((A % C) + (B % C)) % C);
    console.log((A * B) % C);
    console.log(((A % C) * (B % C)) % C);
}

solution(A, B, C);