// Реализовать следующие классы Круг, Треугольник и Квадрат, которые
// наследуются от Figure. Каждый экземпляр класса должен содержать свойства
// Площадь и Имя. Вывести всю информацию о фигурах в консоль. Площадь должна
// рассчитываться по математическим формулам. Класс Figure содержит поля: pi =
// 3.14, r = radius, a = side, h = height, а также сеттеры для данных полей. Дочерние
// классы содержать геттеры на получение площади

class Figure {
  pi;
  r;
  a;
  h;

  getPi = () => this.pi;
  getR = () => this.r;
  getA = () => this.a;
  getH = () => this.h;

  setPi = (pi) => (this.pi = pi);
  setR = (r) => (this.r = r);
  setA = (a) => (this.a = a);
  setH = (h) => (this.h = h);
}

class Rectangle extends Figure {
  nameRec;

  spaceRectangle = () => `${this.nameRec} space = ${0.5 * this.a + this.h} m2`;

  getNameRec = () => this.nameRec;
  setNameRec = (nameRec) => (this.nameRec = nameRec);
}

class Square extends Figure {
  nameSquare;

  spaceSquare = () => `${this.nameSquare} space = ${this.a + this.h} m2`;

  getNameSquare = () => this.nameSquare;
  setNameSquare = (nameSquare) => (this.nameSquare = nameSquare);
}

class Round extends Figure {
  name;
  spaceRound = () => `${this.name} space = ${this.pi + this.r ** 2} m2`;

  getName = () => this.name;
  setName = (name) => (this.name = name);
}

const round = new Round();
round.setPi(3.14);
round.setR(10);
round.setName("round");

console.log(round.spaceRound());

const rectangle = new Rectangle();
rectangle.setA(2);
rectangle.setH(5);
rectangle.setNameRec("rectangle");

console.log(rectangle.spaceRectangle());

const square = new Square();
square.setA(2);
square.setH(5);
square.setNameSquare("square");

console.log(square.spaceSquare());
