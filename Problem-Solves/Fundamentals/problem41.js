/* 
    Name: Muhammed Nayeem
    Title: Student
    Institute: Leading University, Sylhet
    Profession: JavaScript Developer
*/

const circleOfNumbers = (n, firstNumber) => {
  let circleHalf = n / 2;
  if (firstNumber >= circleHalf) {
    return firstNumber - circleHalf;
  } else {
    return firstNumber + circleHalf;
  }
};

// const circleOfNumbers = (n, fn) => (fn >= n / 2 ? fn - n / 2 : fn + n / 2);

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 7));
console.log(circleOfNumbers(4, 1));
console.log(circleOfNumbers(6, 3));
