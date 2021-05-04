const find_average = (array) => {
  if (typeof array !== "undefined" && array.length === 0) {
    return 0;
  } else {
    let sum = array.reduce(function (prev, curr) {
      return prev + curr;
    });
    return sum / array.length;
  }
};
console.log(find_average([1, 1, 1]));
