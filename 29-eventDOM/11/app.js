// По нажатию на кнопку поменять местами значения 2 инпутов.

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let inp1 = document.querySelector(".inp1");
  let inp2 = document.querySelector(".inp2");
  const a = inp1.value;
  const b = inp2.value;

  inp1.value = b;
  inp2.value = a;
});
