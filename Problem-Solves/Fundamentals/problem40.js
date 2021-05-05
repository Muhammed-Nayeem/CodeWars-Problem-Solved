const arr = [66, 101];
const arr2 = [80, 117, 115, 104, 45, 85, 112, 115];
const char = ["t", "e", "s", "t"];
const char2 = ["what", "a", "great", "kata"];

/*
const check = (a, x) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }
  return false;
}
*/

/*
const check = (a, x) => {
  if (a.includes(x)) {
    return true;
  } else {
    return false;
  }
};
*/

const check = (a, x) => a.includes(x) ? true : false;

// const check = (a, x) => a.includes(x);

console.log(check(arr, 66));
console.log(check(arr2, 45));
console.log(check(char, "e"));
console.log(check(char2, "kat"));
