// На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const str = "misha_ph@gmail.com";

function isValid(str_) {
  try {
    if (!/^[a-zA-z0-9\_\.]+@[a-z]{1,9}\.[a-z]{1,9}$/gm.test(str_))
      throw new Error("не подходит");
    return true;
  } catch (error) {
    return error.message;
  }
}

let result = isValid(str);

console.log(result);
