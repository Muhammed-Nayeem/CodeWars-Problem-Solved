/*
function repeatStr(n, s) {
  let repeatedStr = "";
  while (n > 0) {
    repeatedStr += s;
    n--;
  }
  return repeatedStr;
}
*/

const repeatStr = (n, s) => s.repeat(n);

console.log(repeatStr(5, "Hello"));
