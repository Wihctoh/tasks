// Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.

class Validator {
  isEmail(str) {
    try {
      if (!/^\w+\@[a-z]+\.[a-z]{2,}$/gm.test(str)) throw new Error(false);
      return true;
    } catch (error) {
      return error.message;
    }
  }
}

const validator = new Validator();

let result = validator.isEmail("qwerty@gmail.com");

console.log(result);
