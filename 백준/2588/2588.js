const fs = require('fs');
const path = require('path');
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split('\n');
const A = +input[0];
const arr = input[1].split('');
const B = [];

for (let i = 0; i < arr.length; i++)
{
    B.push(+arr[i]);
}
//    A : 472
//    B : [3, 8, 5]

function solution(A, B)
{
    let sum = 0;
    for(let i = B.length - 1; i >= 0; i--)
    {
        console.log(A * B[i]);
        sum += (A * B[i]) * (10 ** (B.length - 1 - i))
    }
    console.log(sum);
}

solution(A, B);