const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
const year = +input;
//    year : 1999

function solution(year)
{
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    {
        console.log(1);
    }
    else
    {
        console.log(0);
    }
}

solution(year);