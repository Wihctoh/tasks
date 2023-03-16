// Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
// 	замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
// 	если слова являются анаграммами. Добавить проверки на ввод

class Anagram {
  isValid(word1, word2) {
    if (word1 == "" || word2 == "" || !isNaN(word1) || !isNaN(word2))
      throw new Error("enter the word!");
  }

  isAnagram(wordInput, wordChecked) {
    try {
      this.isValid(wordInput, wordChecked);

      if (
        wordInput.split("").sort().join("") !=
        wordChecked.split("").sort().join("")
      )
        throw new Error("not anagram!");
      return true;
    } catch (error) {
      return error.message;
    }
  }
}

const anagram = new Anagram();

const inpWord = "стационар";
const checkedWord = "соратница";

let anagramm = anagram.isAnagram(inpWord, checkedWord);

console.log(anagramm);
