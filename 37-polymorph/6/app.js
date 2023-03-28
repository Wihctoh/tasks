// Реализуйте класс Client, содержащий метод sendRequest. Ваша задача получить
// данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на
// сервер» (отправку запроса мы не проходили => просто вывести на экран
// образовавщийся объект вида: {email: email, pwd: pwd}

class Client {
  sendRequest() {
    document.querySelector("button").addEventListener("click", () => {
      const email = document.querySelector(".email");
      const psw = document.querySelector(".psw");
      const div = document.querySelector("div");

      div.innerHTML = JSON.stringify({
        email: email.value,
        pwd: psw.value,
      });
    });
  }
}

const client = new Client();

client.sendRequest();
