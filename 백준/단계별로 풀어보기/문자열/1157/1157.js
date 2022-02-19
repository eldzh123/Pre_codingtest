const fs = require("fs");
const path = require("path");
let input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();
input = input.split("");
//  input : ['M', 'i', ... , 'p', 'i']

function solution(input) {
  const arr = [];
  for (let i = 0; i < input.length; i++) {
    let haveAlphabet = 0;
    const alphabet = {
      c: input[i].toUpperCase(),
      number: 0,
    };
    for (let j = 0; j < arr.length; j++) {
      if (alphabet.c === arr[j].c) {
        haveAlphabet = 1;
        arr[j].number++;
      }
    }
    if (haveAlphabet === 0) {
      arr.push(alphabet);
    }
  }
  let max = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].number > max) {
      max = arr[i].number;
      index = i;
    }
  }
  let isDuplication = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].number === max) {
      isDuplication++;
    }
  }
  if (isDuplication === 1) {
    console.log(arr[index].c);
  } else {
    console.log("?");
  }
}

solution(input);
