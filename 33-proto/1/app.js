// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
// этого массива

let arr = [];

document.querySelector("button").addEventListener("click", function () {
  try {
    const div = document.querySelector(".arr");
    const avg = document.querySelector(".avg");
    const inp = document.querySelector("input");

    isValid(inp);

    arr.push(inp.value);

    div.innerHTML = arr;
    inp.value = "";

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += +arr[i];
    }

    avg.innerHTML = sum / arr.length;
  } catch (error) {
    alert(error.message);
  }
});

function isValid(inp) {
  if (isNaN(inp.value)) throw new Error("not a number");
  if (!inp.value) throw new Error("empty");
}
