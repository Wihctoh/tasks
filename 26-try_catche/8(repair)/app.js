// Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! требует доработки

const arrLetter1 = ["a", "b", "c", "d", "f"];
const arrLetter2 = ["O", "Q", "R", "S"];

function doWords(arrLetter_) {
  try {
    let alphabet = "abcdefghijklmnopqistuvwxyz";
    let sliceArr = [];

    for (let i = 0; i < alphabet.length; i++) {
      if (arrLetter_.includes(alphabet[i])) {
        sliceArr.push(alphabet[i]);
      }
    }
    return sliceArr;
  } catch (error) {
    return error.message;
  }
}
let result = doWords(arrLetter1);

console.log(result);
