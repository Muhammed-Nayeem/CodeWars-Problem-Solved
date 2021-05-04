const spEng = (sentence) =>sentence.toUpperCase().includes("ENGLISH") ? true : false;

/*
const spEng = (sentence) => {
  let testWord = sentence.toUpperCase();
  return testWord.includes("ENGLISH") ? true : false;
};
*/

console.log(spEng("english"));
console.log(spEng("neglish"));
console.log(spEng("abcEnglishdef"));
