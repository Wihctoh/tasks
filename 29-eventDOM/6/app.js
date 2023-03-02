// Необходимо отобразить кнопку и инпут со значением по умолчанию.
// По клику на кнопку заменить значение инпута

const btn = document.querySelector("button");
let flag = false;

btn.addEventListener("click", function () {
  const inp = document.querySelector("input");

  if (flag == false) {
    inp.value = "hi";
    flag = true;
  } else {
    inp.value = "hi";
    flag = true;
  }
});
