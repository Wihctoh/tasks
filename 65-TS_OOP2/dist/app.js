//1. Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)
class ServerPost {
    middleware() {
        return this.controller();
    }
    controller() {
        return this.service();
    }
    service() {
        return this.repository();
    }
    repository() {
        const data = [
            { id: 0, email: "Test0", pws: "test0" },
            { id: 1, email: "Test1", pws: "test1" },
            { id: 2, email: "Test2", pws: "test2" },
        ];
        const filtered = data.filter((el) => el.email === arr.email);
        if (!filtered.length) {
            data.push({ id: data.length, ...arr });
        }
        else
            console.log("error");
        return data;
    }
}
const arr = JSON.parse(`{ "email": "Test", "pws": "test" }`);
const serverPost = new ServerPost();
console.log(serverPost.middleware());
//15 Создайте класс Cat, представляющий кошку. У класса Cat должны быть приватные
// свойства name, age и color. Реализуйте методы getName, getAge и getColor,
// которые будут возвращать соответствующие свойства. Создайте несколько
// объектов класса Cat и выведите их данные.
