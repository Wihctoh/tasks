// Классы Person и Customer. Напишите класс Person с атрибутами данных для
// имени, адреса и телефонного номера человека. Затем напишите класс Customer
// (Клиент), который является подклассом класса Person. Класс Customer должен
// иметь поле для номера клиента и атрибут булевых данных,
// указывающий, хочет ли клиент быть в списке рассылки или нет.
// Продемонстрируйте экземпляр класса Customer в простой программе

class Person {
  name;
  addres;
  phone;

  getName = () => this.name;
  getAddres = () => this.addres;
  getPhone = () => this.phone;

  setName = (name) => {
    this.name = name;
  };
  setAddres = (addres) => {
    this.addres = addres;
  };
  setPhone = (phone) => {
    this.phone = phone;
  };
}

class Customer extends Person {
  numberOfClient;
  bool;

  getNumberOfClient = () => this.numberOfClient;
  getBool = () => this.bool;

  setNumberOfClient = (numberOfClient) => {
    this.numberOfClient = numberOfClient;
  };
  setBool = (bool) => {
    this.bool = bool;
  };
}

const customer = new Customer();

customer.setName("Evgen");
customer.setAddres("motrosova");
customer.setPhone("+375291111111");
customer.setNumberOfClient("4");
customer.setBool(true);

console.log(customer.getName());
console.log(customer.getAddres());
console.log(customer.getPhone());
console.log(customer.getBool());
