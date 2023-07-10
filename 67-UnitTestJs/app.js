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

module.exports = { doDegree, multiply, doSum, doArrObj };
