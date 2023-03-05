// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом

const btn = document.querySelector("button");
let arr = [];

btn.addEventListener("click", function () {
  const inp = document.querySelector("input");

  try {
    const div = document.querySelector("div");

    if (!inp.value.trim()) throw new Error("epmty");
    if (isNaN(inp.value)) throw new Error("is letter");

    arr.push(inp.value);

    div.innerHTML = arr;

    inp.value = "";

    inp.style = "border: 1px solid black";
  } catch (error) {
    alert(error.message);
    inp.style = "border: 1px solid red";
  }
});
