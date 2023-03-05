// По двойному клику на кнопку изменить цвет кнопки

const btn = document.querySelector("button");
const inp = document.querySelector("input");

btn.addEventListener("dblclick", function () {
  if (!/^[a-zA-Z0-9]+\@[a-z]{2,8}\.[a-z]{2,4}$/gm.test(inp.value)) {
    btn.style.background = "red";
  } else btn.style.background = "green";
});
