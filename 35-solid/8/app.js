// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на uuid, введенный в input. Вывести true, если провека
// успешна.

class DomHtml {
  middleware() {
    document.querySelector("button").addEventListener("click", () => {
      try {
        const inp = document.querySelector("input").value;

        if (!/^[a-z0-9]{8}\-[a-z0-9]{4}\-[a-z0-9]{4}\-[a-z0-9]{4}\-[a-z0-9]{12}$/gm.test(inp))
        throw new Error("error");

        alert(true);
      } catch (error) {
        alert(error.message);
      }
    });
  }
}

const domHtml = new DomHtml();
domHtml.middleware();