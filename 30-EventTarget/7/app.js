// Дана таблица c 1 колонкой. Под таблицей
// сделайте форму (инпут и кнопка), с помощью
// которой можно будет добавить нового
// значение в таблицу.

document.querySelector("button").addEventListener("click", function () {
  const inp = document.querySelector("input");
  const tableBody = document.querySelector("tbody");
  let addTr = document.createElement("tr");
  let addTd = document.createElement("td");

  addTd.innerHTML = inp.value;

  tableBody.appendChild(addTr);
  addTr.appendChild(addTd);
  inp.value = "";
});
