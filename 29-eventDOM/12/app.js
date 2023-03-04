// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое

const btn = document.querySelector("button");
let arr = [];

btn.addEventListener("click", function () {
  try {
    const inp = document.querySelector("input");
    const div = document.querySelector(".res");

    if (inp.value === "") throw new Error("empty");

    arr.push(inp.value);
    div.innerHTML = arr;
  } catch (error) {
    alert(error.message);
  }
});
