// На вход подается число с помощью метода prompt – количество символов в
// будущей строке. Необходимо сформировать строку, в которую каждый раз будет
// происходить ввод с клавиатуры нового значения

const num = +prompt("");

let str = "";

for (let i = 0; i < num; i++) {
  str += prompt("");
}