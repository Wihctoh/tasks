//1. Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)
class ServerGetAll {
    controller() {
        return this.service();
    }
    service() {
        return this.repository();
    }
    repository() {
        const arr = [1, 2, 3, 4];
        return arr;
    }
}
const serverGetAll = new ServerGetAll();
console.log(serverGetAll.controller());
