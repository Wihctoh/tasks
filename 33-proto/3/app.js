// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо создать объект, где каждый
// ключ – индекс элемента массива, а значение – текущее итерируемое значение
// массива
// [11, 2, 13] – {
// 0: 11,
// 1: 2,
// 2: 13
// }

let arrStr = [];
let obj1 = {};

function isValid(inp) {
  if (!inp.value.trim()) throw new Error("empty");
}

document.querySelector("button").addEventListener("click", function () {
  try {
    const inp = document.querySelector("input");
    const arr = document.querySelector(".arr");
    const obj = document.querySelector(".obj");

    isValid(inp);

    arrStr.push(inp.value);

    arr.innerHTML = arrStr;
    inp.value = "";

    for (let i = 0; i < arrStr.length; i++) {
      obj1[i] = arrStr[i];
    }

    obj.innerHTML = JSON.stringify(obj1);
  } catch (error) {
    alert(error.message);
  }
});
