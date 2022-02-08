function d(n) {
  const num = n;
  let sum = 0;
  const arr = n.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  return sum + num;
}

function solution() {
  const notSelfNum = [];
  for (let i = 1; i <= 10000; i++) {
    notSelfNum.push(d(i));
  }
  for (let i = 1; i <= 10000; i++) {
    let isSelfNumber = 1;
    for (let j = 0; j < notSelfNum.length; j++) {
      if (notSelfNum[j] === i) {
        isSelfNumber = 0;
        break;
      }

      if (i < 10 && notSelfNum[j] > 100) {
        break;
      } else if (i < 100 && notSelfNum[j] > 1000) {
        break;
      } else if (i < 1000 && notSelfNum[j] > 10000) {
        break;
      }
    }
    if (isSelfNumber === 1) {
      console.log(i);
    }
  }
}

solution();
