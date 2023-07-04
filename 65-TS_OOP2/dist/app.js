//1. Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)
class iValidation {
    email;
    date;
    path;
    constructor(email, date, path) {
        this.email = email;
        this.date = date;
        this.path = path;
        this.isValidDate();
        this.isValidEmail();
        this.isValidPath();
    }
    isValidEmail() {
        console.log(/^[\w.]+@[a-z]+.[a-z]{2,}$/gm.test(this.email)
            ? "valid email"
            : "invalid email");
    }
    isValidDate() {
        console.log(/^[0-9]{2,2}\/[0-9]{2,2}\/[0-9]{2,2}$/gm.test(this.date)
            ? "valid date"
            : "invalid date");
    }
    isValidPath() {
        console.log(/^[A-Z]{1}\:\\\\[\a-z\\а-я А-Я]+\.[a-z]{2,4}$/gm.test(this.path)
            ? "valid path"
            : "invalid path!");
    }
}
const ivalidation = new iValidation("qwe@fsa.com", "01/02/23", "C:\\Users\\Dev\\OneDrive\\Рабочий стол\\daily\\Templates\\05. typescript\\app.js");
