// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
// 	от 1 до n). Необходимо отобразить на экране объект (помните, что окно браузера
// 	не воспринимает объекты как тип данных JavaScript. Для отображения неоходимо
// 	преобразовать строку в ...)

let obj = {};

function isValid(inp) {
  if (!inp.value.trim()) throw new Error("empty");
  if (isNaN(inp.value)) throw new Error("not a number!");
}

document.querySelector("button").addEventListener("click", function () {
  try {
    const div = document.querySelector("div");
    const inp = document.querySelector("input");

    isValid(inp);

    for (let i = 0; i <= +inp.value; i++) {
      obj[i] = i;
    }

    div.innerHTML = JSON.stringify(obj);
  } catch (error) {
    alert(error.message);
  }
});
