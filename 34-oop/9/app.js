// Дополнить класс Validator. Добавить метод isURL для проверки на url.

class Validator {
  isURL(url) {
    try {
      if (!/^(http|https)\:\/\/\w+\.[a-z]{2,}$/gm.test(url))
        throw new Error("incorrect url!");
      return true;
    } catch (error) {
      return error.message;
    }
  }

  isEmail(str) {
    try {
      if (!/^\w.+\@[a-z]+\.[a-z]{2,}$/gm.test(str)) throw new Error(false);
      return true;
    } catch (error) {
      return error.message;
    }
  }
}

const validator = new Validator();

console.log(validator.isURL("http://qwerty.com"));
