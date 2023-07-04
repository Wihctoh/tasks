//1. Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)
class Pwd {
    showPwd() {
        let pwd = "";
        for (let i = 0; i < 8; i++) {
            pwd += Math.round(Math.random() * 10);
        }
        return pwd;
    }
}
class Validation extends Pwd {
    showPwd() {
        const result = super.showPwd();
        console.log(result);
        return result.split("").reverse().join("");
    }
}
const pwd = new Pwd();
const validation = new Validation();
console.log(pwd.showPwd());
console.log("/////////////////");
console.log(validation.showPwd());
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
