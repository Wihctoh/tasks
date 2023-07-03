//1. Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)

// abstract class Shape {
//   abstract calculateArea(): number;
// }

// class Rectangle extends Shape {
//   heigth: number = 5;
//   width: number = 5;

//   calculateArea(): number {
//     return this.heigth * this.width;
//   }
// }

// const rectangle = new Rectangle();

// console.log(rectangle.calculateArea());

//2. Создайте абстрактный класс Animal, содержащий абстрактный метод
// makeSound(). Напишите дочерние классы Dog и Cat, которые наследуют Animal и
// реализуют метод makeSound() для издания соответствующего звука. Создайте
// объекты классов Dog и Cat и вызовите их методы makeSound().

// abstract class Animal {
//   abstract makeSound(): void;
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log("Woof");
//   }
// }

// class Cat extends Animal {
//   makeSound() {
//     console.log("Meow");
//   }
// }

// const dog = new Dog();
// const cat = new Cat();

// dog.makeSound();
// cat.makeSound();

//3. Создайте абстрактный класс Fruit с полем array – массив объектов (id, title, price).
// Напишите дочерний класс Apple, функцию getAppleInfo, возвращающую
// информацию о фрукте, где title = яблоко.

// interface iFruit {
//   id: number;
//   title: string;
//   price: string;
// }

// abstract class Fruit {
//   abstract array: iFruit[];
// }

// class Apple extends Fruit {
//   array: iFruit[] = [
//     { id: 1, title: "apple", price: "2000$" },
//     { id: 2, title: "pineapple", price: "1000$" },
//     { id: 3, title: "orange", price: "3000$" },
//   ];

//   public getAppleInfo(): iFruit[] {
//     const filtered: iFruit[] = this.array.filter((el) => el.title === "apple");

//     return filtered;
//   }
// }

// const apple = new Apple();

// console.log(apple.getAppleInfo());

//4. Создать интерфейс iAccount. Создайте класс "Счет" (Account), который содержит
// свойство "баланс" (balance) и методы "пополнить счет" (deposit) и "снять со счета"
// (withdraw). Установите приватное свойство "баланс" и обеспечьте доступ к нему
// только через методы класса. Реализуйте проверку на достаточность средств
// перед снятием со счета.

// interface iAccount {
//   deposit(money: number): void;
//   withdraw(money: number): void;
//   getBalance(): number;
// }

// class Account implements iAccount {
//   private balance: number = 0;

//   deposit(money: number): void {
//     this.balance += money;
//   }

//   withdraw(money: number): void {
//     if (this.balance > money) this.balance -= money;
//   }

//   getBalance(): number {
//     return this.balance;
//   }
// }

// const account: iAccount = new Account();

// account.deposit(20);
// account.withdraw(10);
// console.log(account.getBalance());

// 5. Создайте абстрактный класс "Транспортное средство" (Vehicle), который содержит
// абстрактные методы "завести" (start) и "остановить" (stop). Реализуйте классынаследники "Автомобиль" (Car) и "Мотоцикл" (Motorcycle), которые расширяют
// класс "Транспортное средство" и реализуют абстрактные методы в соответствии с
// особенностями каждого транспортного средства. (седержимое методов:
// console.log)

// abstract class Vehicle {
//   abstract start(): void;
//   abstract stop(): void;
// }

// class Car extends Vehicle {
//   start(): void {
//     console.log("start car");
//   }
//   stop(): void {
//     console.log("stop car");
//   }
// }

// class Motorcycle extends Vehicle {
//   start(): void {
//     console.log("start Motorcycle");
//   }
//   stop(): void {
//     console.log("stop Motorcycle");
//   }
// }

// const car = new Car();
// const motorcycle = new Motorcycle();

// car.start();
// car.stop();
// motorcycle.start();
// motorcycle.stop();

// 6. Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
// (хначение инициализируется через конструктор класса), методы getAverage,
// getMax, getMin для вычисления среднего значения, максимального и
// минимального элементов массива.
// interface iAnalyzer {
//   array: Array<Number>;
//   getAverage(): number;
//   getMax(): number;
//   getMin(): number;
// }

// class ArrayAnalyzer {
//   public array: Array<number> = [];

//   constructor(num) {
//     for (let i = 0; i < num; i++) {
//       this.array.push(Math.round(Math.random() * 10));
//     }
//   }

//   getAverage(): number {
//     const avg = this.array.reduce((sum, el) => sum + el, 0);

//     return avg / this.array.length;
//   }

//   getMax(): number {
//     return Math.max(...this.array);
//   }

//   getMin(): number {
//     return Math.min(...this.array);
//   }
// }

// const arrayAnalyzer = new ArrayAnalyzer(5);

// console.log(
//   arrayAnalyzer.getAverage(),
//   arrayAnalyzer.getMax(),
//   arrayAnalyzer.getMin()
// );

// 7. Создайте класс StringManipulator, который будет иметь методы reverseString,
// isPalindrome, countVowels. Реализуйте функционал для разворота строки,
// проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
// Использовать Generics

class StringManipulator {
  reverseString<myType>(string: myType): string {
    if (typeof string === "string") return string.split("").reverse().join("");
  }

  isPalindrome<myType>(string: myType): boolean {
    if (typeof string === "string")
      return string.split("").reverse().join("") === string ? true : false;
  }

  countVowels<myType>(string: myType): number {
    const letters: string = "aeuio";
    let count: number = 0;

    if (typeof string === "string") {
      for (let i = 0; i < string.length; i++) {
        if (letters.includes(string[i])) count++;
      }

      return count;
    }
  }
}

const stringManipulator = new StringManipulator();

console.log(stringManipulator.reverseString<string>("qwer"));
console.log(stringManipulator.isPalindrome<string>("anna"));
console.log(stringManipulator.countVowels<string>("aaeett"));
