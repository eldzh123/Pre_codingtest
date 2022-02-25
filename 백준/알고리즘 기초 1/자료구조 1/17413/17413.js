const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .trim();

function revWord(word) {
  const arr = word.split("");
  let result = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    result += arr[i];
  }
  return result;
}

function solution(input) {
  const arr = input.split("");
  let result = "";
  let word = "";
  let isTag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "<") {
      isTag = true;
      result += revWord(word);
      word = "";
      result += arr[i];
    } else if (arr[i] === ">") {
      isTag = false;
      result += arr[i];
    } else if (arr[i] === " ") {
      if (isTag) {
        result += arr[i];
      } else {
        result += `${revWord(word)} `;
        word = "";
      }
    } else if (i === arr.length - 1) {
      word += arr[i];
      result += revWord(word);
    } else {
      if (isTag) {
        result += arr[i];
      } else {
        word += arr[i];
      }
    }
  }
  console.log(result);
}

solution(input);
