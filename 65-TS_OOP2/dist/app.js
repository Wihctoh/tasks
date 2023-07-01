//1. Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)
class ArrayAnalyzer {
    array = [];
    constructor(num) {
        for (let i = 0; i < num; i++) {
            this.array.push(Math.round(Math.random() * 10));
        }
    }
    getAverage() {
        const avg = this.array.reduce((sum, el) => sum + el, 0);
        return avg / this.array.length;
    }
    getMax() {
        return Math.max(...this.array);
    }
    getMin() {
        return Math.min(...this.array);
    }
}
const arrayAnalyzer = new ArrayAnalyzer(5);
console.log(arrayAnalyzer.getAverage(), arrayAnalyzer.getMax(), arrayAnalyzer.getMin());
