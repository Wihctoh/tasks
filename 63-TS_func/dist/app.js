// 1. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10
// interface iStock {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// }
// const arrTask: iStock[] = [
//   { id: 1, title: "Часы", count: 10, price: 500 },
//   { id: 2, title: "Смартфон", count: 33, price: 1500 },
//   { id: 3, title: "Моноблок", count: 6, price: 2200 },
//   { id: 4, title: "Ноутбук", count: 13, price: 3000 },
//   { id: 5, title: "Планшет", count: 22, price: 2100 },
// ];
// function doSmth(obj: iStock[]):iStock[] {
//   const filed: iStock[] = obj.filter((el: iStock) => el.count > 10);
//   return filed;
// }
// console.log(doSmth(arrTask));
// 2. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары в обратном порядке
// interface iStock {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// }
// const arrTask: iStock[] = [
//   { id: 1, title: "Часы", count: 10, price: 500 },
//   { id: 2, title: "Смартфон", count: 33, price: 1500 },
//   { id: 3, title: "Моноблок", count: 6, price: 2200 },
//   { id: 4, title: "Ноутбук", count: 13, price: 3000 },
//   { id: 5, title: "Планшет", count: 22, price: 2100 },
// ];
// function getAllG(arrTask: iStock[]): iStock[] {
//   const arrRev: iStock[] = [];
//   for (let i = arrTask.length - 1; i >= 0; i--) {
//     arrRev.push(arrTask[i]);
//   }
//   return arrRev;
// }
// console.log(getAllG(arrTask));
//3.  У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары из положения, количество которых внутри массива
// кратно 3
// interface iStock {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// }
// const arrTask: iStock[] = [
//   { id: 1, title: "Часы", count: 10, price: 500 },
//   { id: 2, title: "Смартфон", count: 33, price: 1500 },
//   { id: 3, title: "Моноблок", count: 6, price: 2200 },
//   { id: 4, title: "Ноутбук", count: 13, price: 3000 },
//   { id: 5, title: "Планшет", count: 22, price: 2100 },
// ];
// function count(arr: iStock[]): iStock[] {
//   const filtered: iStock[] = arr.filter((el: iStock) => el.count % 3 === 0);
//   return filtered;
// }
// console.log(count(arrTask));
// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести итоговую стоимость на складе.
// interface iStock {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// }
// const arrTask: iStock[] = [
//   { id: 1, title: "Часы", count: 10, price: 500 },
//   { id: 2, title: "Смартфон", count: 33, price: 1500 },
//   { id: 3, title: "Моноблок", count: 6, price: 2200 },
//   { id: 4, title: "Ноутбук", count: 13, price: 3000 },
//   { id: 5, title: "Планшет", count: 22, price: 2100 },
// ];
// function sum(arr: iStock[]): number {
//   const red: number = arr.reduce(
//     (sum: number, el: iStock) => el.price * el.count + sum,
//     0
//   );
//   return red;
// }
// console.log(sum(arrTask));
// 5. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом
// interface iStock {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// }
// const arrTask: iStock[] = [
//   { id: 1, title: "Часы", count: 10, price: 500 },
//   { id: 2, title: "Смартфон", count: 33, price: 1500 },
//   { id: 3, title: "Моноблок", count: 6, price: 2200 },
//   { id: 4, title: "Ноутбук", count: 13, price: 3000 },
//   { id: 5, title: "Планшет", count: 22, price: 2100 },
// ];
// function maxPrice(arr: iStock[]): number {
//   let resMax: number = arr[0].price;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].price > resMax) {
//       resMax = arr[i].price;
//     }
//   }
//   return resMax;
// }
// console.log(maxPrice(arrTask));
// 6. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов
// interface iStock {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// }
// const arrTask: iStock[] = [
//   { id: 1, title: "Часы", count: 10, price: 500 },
//   { id: 2, title: "Смартфон", count: 33, price: 1500 },
//   { id: 3, title: "Моноблок", count: 6, price: 2200 },
//   { id: 4, title: "Ноутбук", count: 13, price: 3000 },
//   { id: 5, title: "Планшет", count: 22, price: 2100 },
// ];
// function avg(arr: iStock[]): number {
//   const red: number = arr.reduce(
//     (sum: number, el: iStock) => el.price + sum,
//     0
//   );
//   return red / arr.length;
// }
// console.log(avg(arrTask));
// 7. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением
// interface iStock {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// }
// const arrTask: iStock[] = [
//   { id: 1, title: "Часы", count: 10, price: 500 },
//   { id: 2, title: "Смартфон", count: 33, price: 1500 },
//   { id: 3, title: "Моноблок", count: 6, price: 2200 },
//   { id: 4, title: "Ноутбук", count: 13, price: 3000 },
//   { id: 5, title: "Планшет", count: 22, price: 2100 },
// ];
// function maxValue(arr: iStock[]) {
//   const map: number[] = arr.map((el: iStock) => el.price * el.count);
//   return Math.max(...map);
// }
// console.log(maxValue(arrTask));
// 8. У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту
// const arrEmail: string[] = [
//   "qweqwe@asd.ru",
//   "sdasxcxz@asd.ru",
//   "qweqwe@asd.ru",
// ];
// function filt(arr: string[]) {
//   const doom: string[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!doom.includes(arr[i])) doom.push(arr[i]);
//   }
//   return doom;
// }
// console.log(filt(arrEmail));
// 9. Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}
// interface iStyle {
//   name: string;
//   value: number;
// }
// const obj: iStyle[] = [
//   { name: "width", value: 10 },
//   { name: "height", value: 20 },
// ];
// function doSmth(obj: iStyle[]) {
//   const objRes = {};
//   for (let i = 0; i < obj.length; i++) {
//     objRes[obj[i].name] = obj[i].value;
//   }
//   return objRes;
// }
// console.log(doSmth(obj));
// 10. У вас есть массив объектов вида приведенного в приложении. Пользователь
// вводит значение id: например, 1. Необходимо отобразить в консоль найденный
// объект используя алгоритм бинарного поиска.
// interface iStock {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// }
// const arrTask: iStock[] = [
//   { id: 1, title: "Часы", count: 10, price: 500 },
//   { id: 2, title: "Смартфон", count: 33, price: 1500 },
//   { id: 3, title: "Моноблок", count: 6, price: 2200 },
//   { id: 4, title: "Ноутбук", count: 13, price: 3000 },
//   { id: 5, title: "Планшет", count: 22, price: 2100 },
// ];
// 11. У вас есть массив строковых значений. Необходимо вывести количество
// дубликатов в массиве:
// [1, 2, 1, 2, 3, 4, 5, 1] -> 3
const str = [1, 2, 1, 2, 3, 4, 5, 1].sort();
const obj = {};
function duplicate(str) {
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = 0;
        if (obj[str[i]] === str[i]) {
            obj[str[i]]++;
        }
    }
}
duplicate(str);
console.log(obj);
