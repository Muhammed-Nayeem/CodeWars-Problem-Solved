const array = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];

const gooseFilter = (birds) => {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let filteredArr = birds.filter((rmvGeese) => !geese.includes(rmvGeese));
  return filteredArr;
};

console.log(gooseFilter(array));
