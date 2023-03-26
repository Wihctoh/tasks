// Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив) при условии, что email уникальный. Создать
// генерацию нового id. Обязательными функциями считаются функции middleware,
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении

class Server {
  controller(obj) {
    try {
      const contr = this.service(obj);
      return contr;
    } catch (error) {
      return error.message;
    }
  }

  service(obj) {
    const ser = this.repository(obj);
    return ser;
  }

  repository(obj) {
    const arr = [
      { id: 1, email: "yesenia@mail.ru", pwd: "pwd12345678" },
      { id: 2, email: "hanna@mail.ru", pwd: "pwd123123" },
      { id: 3, email: "stanislau@mail.ru", pwd: "pwdtest444" },
      { id: 4, email: "german@mail.ru", pwd: "pwdqqq111" },
      { id: 5, email: "maria@mail.ru", pwd: "pwd746552" },
    ];

    const filtered = arr.filter((el) => {
      if (el.email === obj.email) {
        return true;
      }
    });

    if (filtered.length > 0) throw new Error("have match!");
    arr.push({ id: arr.length + 1, ...obj });

    return arr;
  }
}

class Client {
  isValid(email, psw) {
    if (!/^[A-Za-z0-9\.]+\@[a-z]{1,12}\.[a-z]{2,10}$/gm.test(email))
      throw new Error("Неверный формат электронной почты");

    if (psw.length < 8)
      throw new Error("Пароль не должен быть менее 8 символов");
  }

  isValidPwd() {}

  sendRequest() {
    document.querySelector("button").addEventListener("click", () => {
      try {
        const email = document.querySelector(".email");
        const psw = document.querySelector(".psw");

        this.isValid(email.value, psw.value);

        const div = document.querySelector("div");
        const server = new Server();

        let filtered = server.controller({
          email: email.value,
          psw: psw.value,
        });

        div.innerHTML = JSON.stringify(filtered);
      } catch (error) {
        alert(error.message);
      }
    });
  }
}

const client = new Client();

client.sendRequest();
