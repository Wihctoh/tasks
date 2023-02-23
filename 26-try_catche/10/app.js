// На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
// случае бросить исключение и его обработать

const email = "hanna@gmail.com";

function isEmail(email_) {
  try {
    if (email_.includes("@")) {
      return true;
    } else throw new Error(false);
  } catch (error) {
    return error.message;
  }
}

let result = isEmail(email);

console.log(result);
