const reverseWords = (str) => {
  let words = str.split(" ");
  return words.map((word) => word.split("").reverse().join("")).join(" ");
};
console.log(reverseWords("This is an example!"));