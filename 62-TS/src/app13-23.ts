// 13. На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]

// const dynamicArr: number[] = [1, 2, 3, 4, 5, 6];

// const mapingArr: string[] = dynamicArr.map((el) =>
//   el % 2 === 0 ? "чет" : "нечет"
// );

// console.log(mapingArr);

//14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.

// const string999: string = "qqqqwwweeer";
// const obj11 = {};

// for (let i = 0; i < string999.length; i++) {
//   if (obj11[string999[i]]) {
//     obj11[string999[i]] += 1;
//   } else obj11[string999[i]] = 1;
// }
// const result1111 = Object.entries(obj11);

//15. На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]

// const str33: string[] = ["hschool", "company"];
// let resArr: string[] = [];

// str33.forEach((el) => resArr.push("!" + el));

// console.log(resArr);

// 16. Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.

// const numArray: number[] = [3, 4, 9, 10, 60, 70];
// const count: number[] = [numArray[0]];

// for (let i = 1; i < numArray.length; i++) {
//   if (numArray[i] > count[count.length - 1]) {
//     count.push(numArray[i]);
//   } else {
//     console.log(false);
//     break;
//   }
// }

// if (numArray.length === count.length) console.log(true);

// 17. Создайте массив чисел и найдите наибольшую разницу между любыми двумя
// элементами.

// const numberArr: number[] = [1, 20, 3, 40, 5, 6];
// const resultArrNum: number[] = [];

// resultArrNum.push(Math.max(...numberArr));
// resultArrNum.push(Math.min(...numberArr));

// const [first, second] = resultArrNum;

// console.log(resultArrNum);
// console.log(first - second);

// 18. Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)

// interface iArrObj {
//   author: string;
//   title: string;
// }

// const arrObj: iArrObj[] = [
//   { author: "Булгаков", title: "Собачье сердце" },
//   { author: "Гоголь", title: "Мертвые души" },
//   { author: "Булгаков", title: "Мастер и маргарита" },
//   { author: "Пушкин", title: "Дубровский" },
// ];

// for (let i = 0; i < arrObj.length; i++) {
//   if (arrObj[i].author === "Булгаков") {
//     console.log(arrObj[i]);
//   }
// }

// 19. Создайте массив объектов, представляющих книги, и отобразите книги где цена
// каждой > 50 (price – одно из полей объекта)

// interface iArrObj {
//   author: string;
//   title: string;
//   price: number;
// }

// const arrObj: iArrObj[] = [
//   { author: "Булгаков", title: "Собачье сердце", price: 10 },
//   { author: "Гоголь", title: "Мертвые души", price: 50 },
//   { author: "Булгаков", title: "Мастер и маргарита", price: 100 },
//   { author: "Пушкин", title: "Дубровский", price: 60 },
// ];

// const filterBook: iArrObj[] = arrObj.filter((el) => el.price > 50);

// console.log(filterBook);

// 20.Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)

// interface iArrObj {
//   author: string;
//   title: string;
//   price: number;
//   count: number;
// }

// const arrObj: iArrObj[] = [
//   { author: "Булгаков", title: "Собачье сердце", price: 10, count: 100 },
//   { author: "Гоголь", title: "Мертвые души", price: 50, count: 200 },
//   { author: "Булгаков", title: "Мастер и маргарита", price: 100, count: 300 },
//   { author: "Пушкин", title: "Дубровский", price: 60, count: 350 },
// ];

// let elem: number = 0;

// for (let i = 0; i < arrObj.length; i++) {
//   if (arrObj[i].count > elem) {
//     elem = arrObj[i].count;
//   }
// }

// const filterBook: iArrObj[] = arrObj.filter((el) => el.count === elem);

// console.log(filterBook);

// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.

// const stringItem: string | string[] = "qwe asd zxczzxczx".split(" ");
// let count = 0;

// for (let i = 0; i < stringItem.length; i++) {
//   if (stringItem[i].length > count) count = stringItem[i].length;
// }

// const filtered1 = stringItem.filter((el) => el.length === count);

// console.log(`max length word is ${count} in ${filtered1}`);

// 22. Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.

// interface iArrObj {
//   name: string;
//   salary: number;
// }

// const arrObj: iArrObj[] = [
//   { name: "Kate", salary: 100 },
//   { name: "Jack", salary: 200 },
//   { name: "Vito", salary: 300 },
// ];

// const resuledSal: number = arrObj.reduce((sum, el) => el.salary + sum, 0);

// console.log(`average price is: ${resuledSal / arrObj.length}$`);

// 23. Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...

interface iArrObj {
  name: string;
  salary: number;
  count: number;
}

const arrObj: iArrObj[] = [
  { name: "milk", salary: 100, count: 10 },
  { name: "bread", salary: 200, count: 15 },
  { name: "water", salary: 300, count: 20 },
];

const reduceRes: number = arrObj.reduce(
  (sum, el) => el.salary * el.count + sum,
  0
);

console.log(reduceRes);
