const fs = require('fs');
const path = require('path');
let input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();
input = input.split('\n');
const x = +input[0];
const y = +input[1];
//    x : 9
//    y : -13

function solution(x, y)
{
    if (x > 0)
    {
        if (y > 0)
        {
            console.log(1);
        }
        else
        {
            console.log(4);
        }
    }
    else
    {
        if (y > 0)
        {
            console.log(2);
        }
        else
        {
            console.log(3);
        }
    }
}

solution(x, y);