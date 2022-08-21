const alternate = (n, v1, v2) => {
  let arr = Array();
  let i;
  for (i = 0; i < n; i++) {
    if (i % 2 === 0) {
      arr.push(v1);
    } else {
      arr.push(v2);
    }
  }
  return arr;
};

console.log(makeArray(4, "blue", "red"));
