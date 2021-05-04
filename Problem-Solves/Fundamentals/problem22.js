const powersOfTwo = (n) => {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i));
  }
  return arr;
};
console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));
console.log(powersOfTwo(4));
