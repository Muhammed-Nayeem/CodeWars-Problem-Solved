const quarterOf = (month) => {
  switch(month) {
    case 1: case 2: case 3:
      return 1;
    
    case 4: case 5: case 6:
      return 2;
    
    case 7: case 8: case 9:
      return 3;

    case 10: case 11: case 12:
     return 4;

    default:
      return "Not a valid number!";
  }
};

/*
const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  }
};
*/

// const quarterOf = (month) => Math.ceil(month / 3);

console.log(quarterOf(3));
console.log(quarterOf(5));
console.log(quarterOf(8));
console.log(quarterOf(11));
