//1. Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)
class University {
    students = [
        { id: 0, name: "Kate" },
        { id: 1, name: "Jack" },
        { id: 2, name: "Slava" },
    ];
}
class Students extends University {
    id;
    getStudentById() {
        const result = this.students.filter((el) => el.id === this.id);
        console.log(result);
    }
}
const students = new Students();
students.id = 1;
students.getStudentById();
// 12. Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая: controller -> service -> repository, где:
// interface iServerGetAll {
//   controller(): number[];
//   service(): number[];
//   repository(): number[];
// }
// class ServerGetAll {
//   controller(): number[] {
//     return this.service();
//   }
//   service(): number[] {
//     return this.repository();
//   }
//   repository() {
//     const arr: number[] = [1, 2, 3, 4];
//     return arr;
//   }
// }
// const serverGetAll: iServerGetAll = new ServerGetAll();
// console.log(serverGetAll.controller());
