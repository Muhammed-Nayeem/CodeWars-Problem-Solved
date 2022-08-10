const sort = (word) => word.split("").sort().join("");

// const anagrams = (word, wordsArr) => {
//   let wordToken = sort(word);
//   let wordStorage = [];

//   for (let i = 0; i < wordsArr.length; i++) {
//     if (sort(wordsArr[i]) === wordToken) {
//       wordStorage.push(wordsArr[i]);
//     }
//   }
//   return wordStorage;
// };

const anagrams = (word, words) => {
  let wordToken = sort(word);

  return words.filter((w) => sort(w) === wordToken);
};

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
