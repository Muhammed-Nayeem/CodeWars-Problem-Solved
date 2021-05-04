/*
const enough = (cap, on, wait) => {
  if (cap >= on + wait) {
    return 0;
  } else {
    return (on + wait) - cap;
  }
};
*/

const enough = (cap, on, wait) => (cap >= on + wait ? 0 : on + wait - cap);

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));
