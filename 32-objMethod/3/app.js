// На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str. Values

const obj = {
  name: "ez",
  lastName: "ez2",
  age: "22",
};

const str = "22";

function search(obj_, str_) {
  try {
    let value = Object.values(obj_);

    if (!value.includes(str_)) throw new Error("no have");

    return true;
  } catch (error) {
    return error.message;
  }
}

let result = search(obj, str);

console.log(result);
