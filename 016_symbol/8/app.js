// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// мем -> true
// тест -> false

const word = "anna".trim().toLowerCase();
const reverseWord = word.split("").reverse().join("");
if (word === reverseWord) {
  console.log(true);
} else console.log(false);
