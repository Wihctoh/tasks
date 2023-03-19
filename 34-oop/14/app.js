// Реализуйте класс ServerPut. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// {"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1
// }`
// Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести
// обновление значений для соответствующих ключей.
// Если совпадения по id нет – ошибка. Добавить проверки

class ServerPost {
  controller(data) {
    try {
      let serv = this.services(data);

      return serv;
    } catch (error) {
      return error.message;
    }
  }
  services(data) {
    let rep = this.repository(data);

    return rep;
  }
  repository(data) {
    let arr = [
      {
        id: "javascript",
        label: "JavaScript",
        category: "programmingLanguages",
        priority: 1,
      },
      {
        id: "typescript",
        label: "TypeScript",
        category: "programmingLanguages",
        priority: 1,
      },
      {
        id: "sql",
        label: "SQL",
        category: "programmingLanguages",
        priority: 2,
      },
      {
        id: "java",
        label: "Java",
        category: "programmingLanguages",
        priority: 3,
      },
      { id: "go", label: "GO", category: "programmingLanguages", priority: 3 },
    ];

    const filtered = arr.filter((el) => el.id != data.id);

    if (filtered.length === arr.length) {
      throw new Error("not match");
    } else filtered.push(data);

    return filtered;
  }
}

const data = {
  id: "javascript",
  label: "JavaScript",
  category: "programmingLanguages",
  priority: 1,
};

const serverPost = new ServerPost();

let result = serverPost.controller(data);

console.log(result);
