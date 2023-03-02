// Необходимо отобразить числовой инпут и кнопку.
// После нажатия на кнопку необходимо получить значение из инпута.
// Проверить, что это число > 0. Если проверка true, то вывести в Результат ряд Фибоначчи.

let btn = document.querySelector("button");
const div = document.querySelector("div");
let arr = [0, 1];

btn.addEventListener("click", function () {
  try {
    let inp = document.querySelector("input");

    if (inp.value == "") throw new Error("empty");
    if (isNaN(inp.value)) throw new Error("input Number");

    for (let i = 2; i < inp.value; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }

    div.innerHTML = arr;
  } catch (err) {
    alert(err.message);
  }
});
