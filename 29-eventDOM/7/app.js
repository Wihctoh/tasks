// Записать в результат удвоенное значение инпута. Добавить проверки

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const inp = document.querySelector("input");
  const div = document.querySelector("div");

  if (inp.value.trim() === "") throw new Error("empty");
  if (isNaN(inp.value)) throw new Error("input number");

  div.innerHTML = "результат:" + " " + inp.value ** 2;
});
