// Дополнить класс Validator. Добавить метод isPhone для проверки на номер
// телефона.

class Validator {
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
