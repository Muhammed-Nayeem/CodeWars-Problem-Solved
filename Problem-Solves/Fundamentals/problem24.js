const dutyFree = (normPrice, discount, hol) => {
  let percentage = discount / 100;
  return Math.floor((hol / percentage) / normPrice);
};

/*
const dutyFree = (normPrice, discount, hol) => {
  let saving = normPrice * discount / 100;
  return Math.floor(hol / saving);
};
*/

console.log(dutyFree(12, 50, 1000));
console.log(dutyFree(17, 10, 500));
console.log(dutyFree(24, 35, 3000));
