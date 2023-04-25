// Реализуйте класс HTML. Класс содержит метод bindOption содержащий обработчик
// события. Задача:
// • По клику на кнопку необходимо получить значение input и отобразить в пустой div
// (в созданной html разметке) посредством InnerHTML.
// • Добавить стили для отображения текста input: например, изменить цвет букв.
// • Добавить проверки на получение значения input

class Html {
  bindOption() {
    document.querySelector("button").addEventListener("click", () => {
      const inp = document.querySelector("input");

      try {
        const div = document.querySelector("div");

        if (inp.value === "") throw new Error("empty!");

        inp.style = "border: 1px solid black";
        div.innerHTML = inp.value;
      } catch (error) {
        alert(error.message);
        inp.style = "border: 1px solid red";
      }
    });
  }
}

const html = new Html();

html.bindOption();
