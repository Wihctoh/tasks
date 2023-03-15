// 10. Дополнить класс Validator. Добавить метод isDate для проверки на дату.
class Validarot {
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
}

const validator = new Validarot();

console.log(validator.isDate("01.12.2023"));
