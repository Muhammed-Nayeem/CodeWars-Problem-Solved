// const twiceAsOld = (dadYearsOld, sonYearsOld) => {
//   let twiceAge = sonYearsOld * 2;
//   return Math.abs(twiceAge - dadYearsOld);
// };

const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - 2 * sonYearsOld);

console.log(twiceAsOld(36, 7));
