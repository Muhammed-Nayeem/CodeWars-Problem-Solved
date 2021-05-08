const between = (a, b) => {
  let array = [];
  if (a < b) {
    for (let i = a; i <= b; i++) {
      array.push(i);
    }
  }
  return array;
};
console.log(between(1, 4));
console.log(between(-2, 2));