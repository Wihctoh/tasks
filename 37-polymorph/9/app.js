// Отобразить в div массив из 5 рандомных значений от 0 до 100. Необходимо
// распознать по какому из значений контейнера производится событие клика. Если
// клик происходит, то удалить данное значение из массива в div

let div = document.querySelector("div");

document.querySelector("button").addEventListener("click", () => {
  const p = document.querySelectorAll("p");

  for (let i = 0; i < p.length; i++) {
    p[i].innerHTML = Math.round(Math.random() * 100);
  }
});

div.addEventListener("click", function (event) {
  event.target.remove();
});
