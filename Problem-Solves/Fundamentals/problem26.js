/*
const mango = (quantity, price) => {
  let totalCost = 0;
  while (quantity > 0) {
    if (quantity > 2) {
      quantity -= 3;
      totalCost += 2 * price;
    } else {
      totalCost += price;
      quantity -= 1;
    }
  }
  return totalCost;
};
*/

const mango = (quantity, price) => {
  let qty = quantity - Math.floor(quantity / 3);
  return qty * price;
};


console.log(mango(3, 3));
console.log(mango(9, 5));
