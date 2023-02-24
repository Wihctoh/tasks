// На вход подается строка в виде пароля. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать.
// Пароль должен содержать:
// • Буквы в UPPER регистре
// • Буквы в LOWER регистре
// • Числа
// • Специальные символы
// • Длина не менее 8 символов

const password = "Qwer123!@";

function isValid(password_) {
  try {
    if (
      /^[a-zA-z0-9]{7,}[\@\!\$\#\*]{1,}$/gm.test(password_) &&
      /^[A-Z]{1,}/gm.test(password_)
    ) {
      return true;
    } else throw new Error("пароль ненадежный!");
  } catch (error) {
    return error.message;
  }
}

let result = isValid(password);

console.log(result);
