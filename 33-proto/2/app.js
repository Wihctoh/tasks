// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк. Необходимо вывести: полный
// массив из всех элементов, а также массив из уникальных значений

let arrStr = [];
let arrUniq = [];

document.querySelector("button").addEventListener("click", function () {
  try {
    const inp = document.querySelector("input");
    const arr = document.querySelector(".arr");
    const uniq = document.querySelector(".uniq");

    arrStr.push(inp.value);

    arr.innerHTML = arrStr;
    inp.value = "";

    for (let i = 0; i < arrStr.length; i++) {
      if (!arrUniq.includes(arrStr[i])) arrUniq.push(arrStr[i]);
    }

    uniq.innerHTML = arrUniq;
  } catch (error) {
    alert(error.message);
  }
});
