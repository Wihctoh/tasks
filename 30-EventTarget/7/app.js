// Дана таблица c 1 колонкой. Под таблицей
// сделайте форму (инпут и кнопка), с помощью
// которой можно будет добавить нового
// значение в таблицу.

document.querySelector("button").addEventListener("click", function () {
  const inp = document.querySelector("input");
  const tr = document.querySelectorAll("tr");

  let trEl = document.createElement("tr");
  let tdEl = document.createElement("td");

  tr[1].after(trEl);

  for (let i = 2; i < tr.length; i++) {
    tr[i].insertAdjacentElement = tdEl;
  }
});
