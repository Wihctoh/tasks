// Дополнить класс Validator. Добавить метод isPhone для проверки на номер
// телефона.

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

  isDate(date) {
    try {
      let valid = date.split(".");
      let dateNow = new Date();

      if (!/^[0-9]{2,2}\.[0-9]{2,2}\.[0-9]{4,4}$/gm.test(date))
        throw new Error("incorrect date!");

      if (valid[0] > 31) throw new Error("day wrong!");
      if (valid[1] > 12) throw new Error("month wrong!");
      if (valid[2] > dateNow.getFullYear()) throw new Error("wrong year!");

      return true;
    } catch (error) {
      return error.message;
    }
  }
  isPhone(number) {
    try {
      if (!/^(\+\d{3,3}|80)\d{2,2}\d{7,7}$/gm.test(number))
        throw new Error("incorrect number!");
      return true;
    } catch (error) {
      return error.message;
    }
  }
}

const validator = new Validator();

console.log(validator.isPhone("80291111111"));
