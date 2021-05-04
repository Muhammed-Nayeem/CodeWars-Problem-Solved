const preFizz = (n) => {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array;
};
console.log(preFizz(1));
console.log(preFizz(2));
console.log(preFizz(3));
console.log(preFizz(4));
console.log(preFizz(5));
