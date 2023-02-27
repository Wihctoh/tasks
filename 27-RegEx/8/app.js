// Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

const str = "!1@2#3$%^&*";

function newStr(str_) {
  try {
    let resStr = "";

    for (let i = 0; i < str_.length; i++) {
      if (/^[a-zA-Z]$/gm.test(str_[i])) {
        resStr += str_[i];
      }
    }

    if (!Boolean(resStr)) {
      throw new Error("no letter!");
    } else return resStr;
  } catch (error) {
    return error.message;
  }
}

let result = newStr(str);

console.log(result);
