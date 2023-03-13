// По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть
// символов 1 строки есть в другой.
// 'rkqodlw', 'world‘ – true
// 'kacvtas', 'steak' – false

document.querySelector("button").addEventListener("click", function () {
  try {
    const inpFirst = document.querySelector("#first");
    const inpLast = document.querySelector("#last");
    const div = document.querySelector("div");

    for (let i = 0; i < inpFirst.value.length; i++) {
      if (inpLast.value.split("").includes(inpFirst.value.split("")[i])) {
        div.innerHTML = true;
      } else div.innerHTML = false;
    }
  } catch (error) {
    return error.messages;
  }
});
