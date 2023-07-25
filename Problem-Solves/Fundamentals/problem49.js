const sumMul = (n, m) => {
  let sum = 0;
  if (n > 0 && m > 0) {
    for (let i = n; i < m; i+=n) {
      sum += i;
    }
  } else {
    return "INVALID";
  }
  return sum;
};

console.log(sumMul(2, 9));
console.log(sumMul(3, 13));
console.log(sumMul(4, 428));
console.log(sumMul(4, -7));
