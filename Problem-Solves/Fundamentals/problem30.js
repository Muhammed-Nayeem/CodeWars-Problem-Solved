const sheeps = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

const countSheeps = (arrayOfSheep) => {
  let count = 0;
  arrayOfSheep.forEach(sheep => {
    if (sheep === null || sheep === undefined) {
      return "Sorry Wrong Input!";
    } else if (sheep === true) {
      count += 1;
    }
  })
  return count;
};
console.log(countSheeps(sheeps));
