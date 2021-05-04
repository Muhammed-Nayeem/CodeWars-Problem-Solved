let arr = ["a", "b", "c", "d"];
const first = (arr, n) => {
  if (n == null) {
    return arr.slice(0, 1);
  }
  if (n < 0) {
    return [];
  } else {
    return arr.slice(0, n);
  }
};

// const first = (arr, n = 1) => arr.slice(0, n);

// const first = (arr, n = 1) => n ? arr.slice(0, n) : [];

console.log(first(arr));
console.log(first(arr, 2));
console.log(first(arr, -2));
