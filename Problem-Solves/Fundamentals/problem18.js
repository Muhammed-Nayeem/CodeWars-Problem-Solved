/*
const paperwork = (n, m) => {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return (n * m);
  }
};
*/

const paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m);

console.log(paperwork(5, 5));
