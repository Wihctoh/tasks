// Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив). Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// Допишите функционал регистрации. Небезопасно хранить в БД пароль в
// пользовательском виде. Необходимо написать алгоритм шифрования с помощью
// шифра Цезаря.
// Задание: На сервер подается объект с ключом pwd, как и сделано в предыдущем
// задании. Пароль – строка текста на английском языке, в которой нужно
// зашифровать все слова. Каждое слово строки следует зашифровать с помощью
// шифра Цезаря (циклического сдвига на длину этого слова). Буквы верхнего и
// нижнего регистров при этом не изменяют свой первоначальный регистр

class Server {
  controller(getLogPass) {
    try {
      const contr = this.service(getLogPass);

      return contr;
    } catch (error) {
      return error.message;
    }
  }

  service(getLogPass) {
    const ser = this.repository(getLogPass);
    return ser;
  }

  repository(getLogPass) {
    const data = [
      { id: 1, email: "yesenia@mail.ru", pwd: "pwdffff" },
      { id: 2, email: "hanna@mail.ru", pwd: "pwdfevcrdv" },
      { id: 3, email: "stanislau@mail.ru", pwd: "pwdtest" },
      { id: 4, email: "german@mail.ru", pwd: "pwdqqq" },
      { id: 5, email: "maria@mail.ru", pwd: "pwdfcel" },
    ];

    

    const filtered = data.filter((el) => el.email === getLogPass.email);

    if (filtered.length > 0) throw new Error("alredy includes");

    data.push({ id: data.length + 1, ...getLogPass });

    return data;
  }
}

const pwd = "abec";

const str = "abcdefghijklmnopqrstuvwxyzabc";
let newPwd = "";

for (let i = 0; i < pwd.length; i++) {
  newPwd += str[str.indexOf(pwd[i]) + 2];
}

const getLogPass = {
  email: "qwe",
  pwd: "123",
};

const server = new Server();

console.log(server.controller(getLogPass));
