const fs = require('fs');
const path = require('path');
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split(' ');
const A = +input[0];
const B = +input[1];
//    A : 5
//    B : 5

function solution(A, B)
{
    if (A > B)
    {
        console.log('>');
    }
    else if (A < B)
    {
        console.log('<');
    }
    else
    {
        console.log('==');
    }
}

solution(A, B);