const abbrevName = (name) => {
  let shortName = name.split(" ");
  const initial = `${shortName.shift().charAt(0)}.${shortName.pop().charAt(0)}`;
  return initial.toUpperCase();
};
console.log(abbrevName("Muhammed Nayeem"));
console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Muhammed Shakib"));
console.log(abbrevName("joydip paul"));
