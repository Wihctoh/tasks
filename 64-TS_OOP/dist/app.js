//1. Создайте класс Student, который содержит проинициализированные свойства
// name (имя) и age (возраст). Создайте несколько экземпляров класса Student и
// выведите их свойства.
// interface iStudent {
//   name: string;
//   age: string;
// }
class CircleR {
    radius = 2;
    getArea() {
        console.log(3.14 * this.radius ** 2);
    }
}
const circleR = new CircleR();
circleR.getArea();
