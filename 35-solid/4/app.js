// Реализуйте класс ServerById. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": 1
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой
// имеется. В противном случае бросить исключение. Добавить проверки

class ServerById {
  controller(data) {
    try {
      let serv = this.service(data);

      return serv;
    } catch (error) {
      return error.message;
    }
  }
  service(data) {
    let rep = this.repository(data);

    return rep;
  }
  repository(data) {
    let arr = [
      { id: 1, name: "Yesenia", age: 22 },
      { id: 2, name: "Hanna", age: 22 },
      { id: 3, name: "Stanislau", age: 25 },
      { id: 4, name: "German", age: 18 },
      { id: 5, name: "Maria", age: 27 },
    ];

    let filtered = arr.filter((el) => el.id === data.id);

    if (!filtered.length) throw new Error("not match!");

    return filtered;
  }
}

let data = JSON.parse(`{"id": 1}`);

const serverById = new ServerById();
let result = serverById.controller(data);

console.log(result);
