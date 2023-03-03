// У вас есть кнопка. После нажатия поменять background.

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  btn.style = "background-color: green; color: white";
});
