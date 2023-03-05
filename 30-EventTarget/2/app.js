// По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за
// границы кнопки сновка скрывать

const btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("mouseover", function (event) {
  div.innerHTML = event.target.textContent;
});

btn.addEventListener("mouseout", function () {
  div.innerHTML = "";
});
