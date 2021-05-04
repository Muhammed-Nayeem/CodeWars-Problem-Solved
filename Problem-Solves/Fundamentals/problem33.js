const reverseSeq = (n) => {
  let num = [];
  for (let i = 1; i <= n; i++) {
    num.push(i);
  }
  return num.reverse();
};
console.log(reverseSeq(5));
