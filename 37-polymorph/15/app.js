// Полиморфизм. Реализуйте класс NumberArray. NumberArray хранит функцию
// multArr, которая заполняет и возвращает массив из 5 рандомных элементов. Класс
// ConsoleArray является производным по отношению к базовому, родительскому
// NumberArray и содержит функцию multArr. Необходимо переопределить multArr
// из базового класса записав в переменную используя метод super. Далее посчитать
// произведение всех элементов массива используя reduce

class NumberArray {
  constructor(num) {
    this.num = num;
  }

  multArr() {
    let arr = [];

    for (let i = 0; i < this.num; i++) {
      let arrEl = Math.floor(Math.random() * 10);

      arr.push(arrEl);
    }
    return arr;
  }
}

class ConsoleArray extends NumberArray {
  multArr() {
    const reducedArr = super.multArr().reduce((sum, el) => sum * el, 1);

    return reducedArr;
  }
}

const consoleArray = new ConsoleArray(5);

console.log(consoleArray.multArr());
