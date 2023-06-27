// 1. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10
// interface iStock {
//   id: number;
//   title: string;
//   count: number;
//   price: number;
// }
const obj = [
    { name: "width", value: 10 },
    { name: "height", value: 20 },
];
function doSmth(obj) {
    const objRes = {};
    for (let i = 0; i < obj.length; i++) {
        objRes[obj[i].name] = obj[i].value;
    }
    return objRes;
}
console.log(doSmth(obj));
