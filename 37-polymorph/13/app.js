// Реализуйте класс Calculator, который будет содержать метод doSqrt,
// возвращающий корень числа принимаемого в параметрах.

class Calculator {
  constructor(num) {
    this.num = num;
  }

  doSqrt() {
    return Math.sqrt(this.num);
  }
}

const calculator = new Calculator(49);

console.log(calculator.doSqrt());
