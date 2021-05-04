const mouthSize = (animal) => (animal.toUpperCase() === "ALLIGATOR" ? "small" : "wide");

console.log(mouthSize("toucan"));
console.log(mouthSize("ant bear"));
console.log(mouthSize("alligator"));
console.log(mouthSize("ALLIGATOR"));
