// На вход подается число с помощью метода prompt – количество символов в
// будущей строке. Необходимо сформировать строку, в которую каждый раз будет
// происходить ввод с клавиатуры нового ЧИСЛОВОГО значения (добавить
// проверку на число). Отобразить в текущей строке только четные элементы

const num = +prompt("введите число");
let str = "";

for (let i = 0; i < num; i++) {
  let value = prompt();

  if (!isNaN(value)) {
    str += value;
  }
}

for (let i = 0; i < str.length; i++) {
  if (str[i] % 2 == 0) {
    console.log(str[i]);
  }
}
