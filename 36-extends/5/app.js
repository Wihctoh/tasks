// Реализуйте класс Client, содержащий метод sendRequest. Ваша задача получить
// данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на
// сервер» (отправку запроса мы не проходили => просто вывести на экран
// образовавщийся объект вида: {email: email, pwd: pwd}

class Client {
  sendRequest() {
    document.querySelector("button").addEventListener("click", () => {
      const inp1 = document.querySelector(".inp1");
      const inp2 = document.querySelector(".inp2");
      const div = document.querySelector("div");

      div.innerHTML = JSON.stringify({ inp: inp1.value, inp2: inp2.value });
    });
  }
}

const client = new Client();

client.sendRequest();
