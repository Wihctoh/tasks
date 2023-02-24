// На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

const str = "C:/Users/Admin/Desktop/test.txt";

function isValid(str_) {
  try {
    if (
      !/^[A-Z]\:(\/|\\)[a-zA-Z0-9]+(\/|\\)[A-Za-z0-9]+(\/|\\)[a-zA-Z]+(\/|\\)[a-zA-z]+\.[a-z]{1,4}$/gm.test(
        str_
      )
    )
      throw new Error(false);
    return true;
  } catch (error) {
    return error.message;
  }
}

let result = isValid(str);

console.log(result);
