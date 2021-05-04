// const convertNum = (num) => {
//   let array = num.toString().split("");
//   return array.reverse().map((n) => parseInt(n));
// };

const digitize = n => Array.from(String(n), Number).reverse();

// console.log(convertNum(34567));
console.log(digitize(34567));
