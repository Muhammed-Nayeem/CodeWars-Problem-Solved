const humanYearsCatYearsDogYears = (humanYears) => {
  let cat, dog;
  if (humanYears <= 0 || typeof humanYears !== "number") {
    return [0, 0, 0];
  } else if (humanYears === 1) {
    cat = 15;
    dog = 15;
  } else if (humanYears === 2) {
    cat = 15 + 9;
    dog = 15 + 9;
  } else if (humanYears > 2) {
    cat = 16 + 4 * humanYears;
    dog = 14 + 5 * humanYears;
  }
  return [humanYears, cat, dog];
};
console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));
