// Написать функцию которая принимает 2 числа и возводит 1 во 2 степень.
// Добавить необходимые проверки.
// Написать тест для функции

function doDegree(a, b) {
  try {
    if (typeof a != "number" || typeof b != "number")
      throw new Error("arguments not a number!");

    return a ** b;
  } catch (error) {
    return error.message;
  }
}

// 2. Написать функцию которая принимает 2 числа и возвращает результат
// произведения 2 множителей. Добавить необходимые проверки.
// Написать тест для функции

function multiply(arr) {
  try {
    if (arr.length === 0) throw new Error("arr is empty!");

    const filtered = arr.filter((el) => typeof el !== "number");
    if (filtered.length > 0) throw new Error("arg not a number!");

    const res = arr.reduce((mult, el) => el * mult, 1);

    return res;
  } catch (error) {
    return error.message;
  }
}

// 3. Написать функцию которая принимает массив чисел и находит сумму всех
// элементов. Добавить необходимые проверки.
// Написать тест для функции

function doSum(arr) {
  try {
    const res = arr.reduce((sum, el) => el + sum, 0);

    return res;
  } catch (error) {
    return error.message;
  }
}

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10 и произведены в Германии
// Написать тест для функции

function doArrObj(arrObj) {
  try {
    const filter = arrObj.filter((el) => {
      if (typeof el.count === "string")
        throw new Error("elements not a number!");

      return el.producer === "Германия" && el.count > 10;
    });

    return filter;
  } catch (error) {
    return error.message;
  }
}

// 5. У вас есть массив строковых значений, состоящий из номеров телефонов.
// Необходимо вывести значения массива без дубликатов. Добавить необходимые
// проверки.
// Написать тест для функции

function removeDouble(arr) {
  try {
    if (arr.length === 0) throw new Error("empry values!");
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number")
        throw new Error("value cant be a number type!");
    }

    const resArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (!resArr.includes(arr[i])) {
        resArr.push(arr[i]);
      }
    }

    return resArr;
  } catch (error) {
    return error.message;
  }
}

// 6. На входе статичный объект. Необходимо посчитать количество пар (ключ:
//   значение) где значение число и вывести количество. Добавить необходимые
//   проверки.

// 7. На входе статичный объект. Необходимо числовые значения удвоить на выходе.
// Написать тест для функции

function doubleValuesInObj(obj) {
  try {
    if (Object.values(obj).length === 0) throw new Error("empty");

    for (let key in obj) {
      if (typeof obj[key] !== "number") throw new Error("not a number");

      obj[key] = obj[key] * 2;
    }

    return obj;
  } catch (error) {
    return error.message;
  }
}

// 8. На входе статичный объект. Необходимо сформировать массив из всх четных
// значений объекта.
// Написать тест для функции

// 9. На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо
// разбить данный одномерный массив на маленькие массивы в зависимости от
// того, какого число ввел пользователь. Добавить необходимые проверки.
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]
// Написать тест для функции

// 10. Реализуйте функцию, которая принимает в качестве параметра строку и
// возвращает массив без каких-либо элементов с одинаковым значением рядом
// друг с другом.
// Написать тест для функции
// 'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’]
// 'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’]
// '12233’ -> [1, 2, 3]
// Написать тест для функции

module.exports = {
  doDegree,
  multiply,
  doSum,
  doArrObj,
  removeDouble,
  doubleValuesInObj,
};
