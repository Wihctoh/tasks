// Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

const arrLetter1 = ["a", "b", "c", "d", "f"];
const arrLetter2 = ["O", "Q", "I", "S"].join("").toLowerCase();

function doWords(arrLetter_) {
  try {
    let alphabet = "abcdefghijklmnopqistuvwxyz";
    let firstLetter = alphabet.indexOf(arrLetter_[0]);
    let sliceArr = alphabet.slice(
      firstLetter,
      firstLetter + arrLetter_.length + 1
    );

    for (let i = 0; i < sliceArr.length; i++) {
      if (sliceArr[i] != arrLetter_[i]) {
        return sliceArr[i];
      }
    }
    return resArr;
  } catch (error) {
    return error.message;
  }
}
let result = doWords(arrLetter2);

console.log(result);
