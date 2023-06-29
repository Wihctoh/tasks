//1. Создайте класс Student, который содержит проинициализированные свойства
// name (имя) и age (возраст). Создайте несколько экземпляров класса Student и
// выведите их свойства.
// interface iStudent {
//   name: string;
//   age: string;
// }

// class Student {
//   public name: string = "Kate";
//   public age: string = "22";
// }

// const student: iStudent = new Student();

// console.log(student.age, student.name);

// 2. Создайте класс Student, который содержит проинициализированные свойства
// name (имя) и age (возраст). Инициализация свойств name, age происходит с
// помощью экземпляра класса. Создайте несколько экземпляров класса Student и
// выведите их свойства.

// interface iStudent {
//   name: string;
//   age: string;
// }

// class Student {
//   public name: string;
//   public age: string;
// }

// const student: iStudent = new Student();

// student.age = "23";
// student.name = "Kate";

// console.log(student.age, student.name);

// 3. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, age происходит в конструкторе класса.
// Создайте несколько экземпляров класса Student и выведите их свойства.

// interface iStudent {
//   name: string;
//   age: string;
// }

// class Student {
//   public name: string;
//   public age: string;

//   constructor(name: string, age: string) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const student: iStudent = new Student("Kate", "22");

// console.log(student.name, student.age);

// 4. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, surname происходит в getter, setter класса.
// Создайте несколько экземпляров класса Student и выведите их свойства.

// interface iStudent {
//   name: string;
//   age: string;
//   getName(): string;
//   getAge(): string;
//   setName(name: string): void;
//   setAge(age: string): void;
// }

// class Student {
//   public name: string;
//   public age: string;

//   getName(): string {
//     return this.name;
//   }
//   getAge(): string {
//     return this.age;
//   }

//   setName(name: string): void {
//     this.name = name;
//   }
//   setAge(age: string): void {
//     this.age = age;
//   }
// }

// const student: iStudent = new Student();

// student.setAge("25");
// student.setName("Kate");

// console.log(student.getAge(), student.getName());

// 5. Создайте класс Rectangle, который содержит свойства width (ширина) и height
// (высота), а также метод getArea(), который возвращает площадь прямоугольника
// (ширина * высота). Создайте экземпляр класса Rectangle и выведите его площадь.

// interface iRectangle {
//   width: number;
//   height: number;
//   getArea(): number;
// }

// class Rectangle {
//   public width: number = 5;
//   public height: number = 5;

//   getArea(): number {
//     return this.width * this.height;
//   }
// }

// const rectangle: iRectangle = new Rectangle();

// console.log(rectangle.getArea());

// 6. Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.

// interface iCalculator {
//   fNum: number;
//   sNum: number;
//   add(): number;
//   subtract(): number;
//   multiply(): number;
//   divide(): number;
// }

// class Calculator {
//   public fNum: number = 5;
//   public sNum: number = 5;

//   add(): number {
//     return this.fNum + this.sNum;
//   }
//   subtract(): number {
//     return this.fNum - this.sNum;
//   }
//   multiply(): number {
//     return this.fNum / this.sNum;
//   }
//   divide(): number {
//     return this.fNum * this.sNum;
//   }
// }

// const calculator: iCalculator = new Calculator();

// console.log(
//   calculator.add(),
//   calculator.subtract(),
//   calculator.multiply(),
//   calculator.divide()
// );

// 7. Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций.
// interface iTodoList {
//   tasks: string[];
//   addTask(task: string): void;
//   removeTask(): void;
//   getTask(task: number): void;
// }

// class TodoList {
//   public tasks: string[] = ["zcx", "asd", "qwe"];

//   addTask(task: string): void {
//     this.tasks.push(task);
//     console.log(this.tasks);
//   }
//   removeTask(): void {
//     this.tasks.pop();
//     console.log(this.tasks);
//   }
//   getTask(task: number): void {
//     console.log(this.tasks[task]);
//   }
// }

// const todoList: iTodoList = new TodoList();

// todoList.addTask("zzz");
// todoList.removeTask();
// todoList.getTask(0);

// 8. Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод
// getArea() (вычисление площади круга). Создайте экземпляр класса CircleR и
// выведите площадь окружности. Площадь круга: π * r^2
// interface iCircleR {
//   radius: number;
//   getArea(): void;
// }

// class CircleR {
//   public radius: number = 2;

//   getArea(): void {
//     console.log(3.14 * this.radius ** 2);
//   }
// }

// const circleR: iCircleR = new CircleR();

// circleR.getArea();

//9. Создайте класс CircleC, который содержит свойство radius (радиус круга) и метод
// getCircumference() (вычисление длины окружности). Создайте экземпляр класса
// CircleC и выведите длину окружности. Длина окружности: 2 * π * r

// interface iCircleR {
//   radius: number;
//   getCircumference(): void;
// }

// class CircleR {
//   public radius: number = 3;

//   getCircumference(): void {
//     console.log(2 * 3.14 * this.radius);
//   }
// }

// const circleR: iCircleR = new CircleR();

// circleR.getCircumference();

// 10. Создайте класс Product, который содержит свойства name (название продукта) и
// price (цена продукта). Реализуйте метод displayProductInfo(), который выводит
// массив продуктов, где цена > 20. Создайте экземпляр класса Product и вызовите
// метод displayProductInfo().
interface iProduct {
  name: string[];
  price: number[];
  displayProductInfo(): void;
}

class Product {
  public name: string[];
  public price: number[];

  displayProductInfo() {
    const res: string[] = [];

    for (let i = 0; i < this.name.length; i++) {
      if (this.price[i] > 20) {
        res.push(`this prod ${this.name[i]} price: ${this.price[i]}`);
      }
    }

    console.log(res);
  }
}

const product: iProduct = new Product();

product.name = ["qwe", "asd", "zxc"];
product.price = [100, 2, 300];

product.displayProductInfo();
