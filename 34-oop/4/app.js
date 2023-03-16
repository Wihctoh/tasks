// Реализуйте класс MathСalculation. В него передается число n – количество
// элементов массива. На основании числа формируется динамический массив из n
// элементов внутри класса. Создать функцию для подсчета всех четных чисел
// массива. Добавить проверки на ввод

class MathCalculation {
  constructor(n) {
    this.n = n;
  }

  findChet() {
    try {
      let arr = [];

      for (let i = 0; i < this.n; i++) {
        let pr = Math.floor(Math.random() * this.n);

        if (pr % 2 == 0) {
          arr.push(pr);
        }
      }
      return arr.length;
    } catch (error) {
      return error.message;
    }
  }
}

const mathCalculation = new MathCalculation(10);

console.log(mathCalculation.findChet());
