// Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки

const obj = {
  name: "ez",
  lastName: "ez2",
  age: 22,
};

function isValid(obj_) {
  try {
    let count = Object.entries(obj_).length;

    if (!count) throw new Error("obj empty");

    return count;
  } catch (error) {
    return error.message;
  }
}

let res = isValid(obj);
console.log(res);
