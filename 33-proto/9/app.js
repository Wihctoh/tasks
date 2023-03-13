// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
// 	от 1 до n). Необходимо вывести количество пар ключ значение объекта)

const obj = {};
let num = 5;

function objValue(num) {
  try {
    for (let i = 0; i < num; i++) {
      obj[i] = i;
    }

    let res = Object.entries(obj);

    return res;
  } catch (error) {
    return error.message;
  }
}

console.log(objValue(num).length);
