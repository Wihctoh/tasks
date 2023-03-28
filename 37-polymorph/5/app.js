// Реализуйте Validation – производный класс, базовый – StringValue.
// Класс StringValue состоит из: свойствa value в конструкторе;
// Класс Validation наследует value в конструкторе при помощи метода super и
// дополнительно принимает и дополняет конструктор свойством: confirmValue;
// класс Validation включает метод checkValue(), который проверяет, что
// передаваемое значение value в конструктор – строка и состоит из букв. Также
// добавить проверку на равенство value и confirmValue
// Необходимо вызвать метод checkValue экземпляра validation

class StringValue {
  constructor(value) {
    this.value = value;
  }
}

class Validation extends StringValue {
  constructor(value, confirmValue) {
    super(value);

    this.confirmValue = confirmValue;
  }

  checkValue() {
    try {
      if (isNaN(this.value) || isNaN(this.confirmValue))
        throw new Error("not letter!");
      if (this.value !== this.confirmValue) throw new Error("not equal!");

      return true;
    } catch (error) {
      return error.message;
    }
  }
}

const validation = new Validation("123", "123");

let res = validation.checkValue();

console.log(res);
