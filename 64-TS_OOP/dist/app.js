//1. Создайте класс Student, который содержит проинициализированные свойства
// name (имя) и age (возраст). Создайте несколько экземпляров класса Student и
// выведите их свойства.
// interface iStudent {
//   name: string;
//   age: string;
// }
class Product {
    name;
    price;
    displayProductInfo() {
        const res = [];
        for (let i = 0; i < this.name.length; i++) {
            if (this.price[i] > 20) {
                res.push(`this prod ${this.name[i]} price: ${this.price[i]}`);
            }
        }
        console.log(res);
    }
}
const product = new Product();
product.name = ["qwe", "asd", "zxc"];
product.price = [100, 2, 300];
product.displayProductInfo();
