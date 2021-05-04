let arr = [1, 2];
const swapValues = (arr) => {
  let temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
  return arr;
};

console.log(swapValues(arr));
