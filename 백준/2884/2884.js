const fs = require('fs');
const path = require('path');
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split(' ');
const H = +input[0];
const M = +input[1];
//    H : 0
//    M : 30

function solution(H, M)
{
    const timeToMinutes = H * 60 + M;
    const result = timeToMinutes - 45;
    let result_H = Math.floor(result / 60);
    let result_M = result % 60;
    if (result_H < 0)
    {
        result_H += 24;
    }
    if (result_M < 0)
    {
        result_M += 60;
    }
    console.log(`${result_H} ${result_M}`);
}

solution(H, M);