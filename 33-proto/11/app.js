// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

const obj = {
  age: 1,
  year: 3,
  month: "may",
};

(function () {
  try {
    let resObj = {};

    for (let i = 0; i < Object.values(obj).length; i++) {
      if (!isNaN(Object.values(obj)[i])) resObj[i] = Object.values(obj)[i];
    }

    console.log(resObj);
  } catch (error) {
    console.log(error.message);
  }
})();
