// На вход подается строка из 2 и более слов. Необходимо все пробелы заменить на
// “!”. Если же длина исходной строки не изменилась, вывести true, в противном
// случае бросить исключение и обработать

const str = "hello world";

function isValid(str_) {
  try {
    let replaseStr = str_.replaceAll(/ /gm, "!");

    console.log(replaseStr);

    if (str_.length !== replaseStr.length) throw new Error("длина изменилась!");
    return true;
  } catch (error) {
    return error.message;
  }
}

let result = isValid(str);

console.log(result);
