// Реализуйте класс Client, содержащий метод doRegistration. Ваша задача получить
// данные из 2 инпутов: почта, пароль. По клику на кнопку «отправить запрос на
// сервер» для последующей записи в массив репозитория класса Server

class Client {
  doRegistration() {
    const getLogPass = {
      email: "",
      pwd: "",
    };

    document.querySelector("button").addEventListener("click", function () {
      const email = document.querySelector(".email").value;
      const pass = document.querySelector(".pass").value;

      getLogPass.email = email;
      getLogPass.pwd = pass;
    });
  }
}

const client = new Client();

client.doRegistration();
