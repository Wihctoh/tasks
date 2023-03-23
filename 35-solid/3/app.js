// Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// controller -> service -> repository, где:
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// Необходимо вывести в консоль весь массив

class ServerGetAll {
  controller() {
    try {
      let serv = this.service();
      return serv;
    } catch (error) {
      return error.message;
    }
  }
  service() {
    let rep = this.repository();
    return rep;
  }
  repository() {
    let arr = [
      { id: 1, name: "Yesenia", age: 22 },
      { id: 2, name: "Hanna", age: 22 },
      { id: 3, name: "Stanislau", age: 25 },
      { id: 4, name: "German", age: 18 },
      { id: 5, name: "Maria", age: 27 },
    ];

    return arr;
  }
}

const serverGetAll = new ServerGetAll();
let result = serverGetAll.controller();

console.log(result);
