const reverseWords = (str) => {
  let spliteStr = str.split(" ");
  let revStr = spliteStr.reverse();
  return revStr.join(" ");
};

/*
const reverseWords = (str) => {
  let splitStr = str.split(" ");
  let revStr = splitStr.map(word => {
    return word;
  });
  return revStr.reverse().join(" ");
};
*/

console.log(reverseWords("The greatest victory is that which requires no battle"));