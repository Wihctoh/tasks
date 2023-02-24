// Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! требует доработки

const arrWord = ["a", "b", "c", "d", "f"];
const arrWord1 = ["O", "Q", "R", "S"];

function doWords(arrWord_) {
  try {
    let arr = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let resArr = [];

    for (let i = 0; i < arrWord_.length; i++) {
      if (!arrWord_.includes(arr[i])) {
        resArr.push(arr[i]);
      }
    }
    return resArr;
  } catch (error) {
    return error.message;
  }
}
let result = doWords(arrWord);

console.log(result);
