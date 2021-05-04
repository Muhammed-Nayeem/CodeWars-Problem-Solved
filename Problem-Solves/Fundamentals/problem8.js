const bmi = (weight, height) => {
  let massIndex = weight / Math.pow(height, 2);
  if (massIndex <= 18.5) {
    return "Underweight";
  } else if (massIndex <= 25.0) {
    return "Normal";
  } else if (massIndex <= 30.0) {
    return "Overweight";
  } else if (massIndex > 30) {
    return "Obese";
  }
};
console.log(bmi(80, 1.8));
