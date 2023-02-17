// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / значение. IIFE

const obj = {
  1: "a",
  2: "b",
  3: 1,
};

(function (obj_) {
  let count = 0;

  for (let key in obj_) {
    count++;
  }
  console.log(count);
})(obj);
