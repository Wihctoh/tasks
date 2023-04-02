// Наследование. Работа с геттерами и сеттерами. Классы Person и Customer.
// Напишите класс Person с атрибутами данных для имени, фамилии. Затем напишите
// класс Customer, который является подклассом класса Person. Класс Customer
// должен иметь поле телефонного номера человека. Продемонстрируйте экземпляр
// класса Customer вызвав геттеры и сеттеры собственного класса и базового

class Person {
  setFirstName = (firstName) => (this.firstName = firstName);
  setLastName = (lastName) => (this.lastName = lastName);

  getFirstName = () => this.firstName;
  getLastName = () => this.lastName;
}

class Customer extends Person {
  setNumber = (number) => (this.number = number);

  getNumber = () => this.number;
}

const customer = new Customer();

customer.setNumber("+375298888777");
customer.setFirstName("Evgen");
customer.setLastName("Zzh");

console.log(
  customer.getFirstName(),
  customer.getLastName(),
  customer.getNumber()
);
