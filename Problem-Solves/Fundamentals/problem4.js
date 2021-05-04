/*
const areaOrPerimeter = (l, w) => {
  if (l === w) {
    return l * w;
  } else {
    return 2 * (l + w);
  }
};
*/

const areaOrPerimeter = (l, w) => (l === w ? l * w : 2 * (l + w));

console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(10, 6));
