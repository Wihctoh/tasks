// Классы Employee и ProductionWorker.
// Напишите класс Employee (Сотрудник), который содержит:
// • имя сотрудника;
// • номер сотрудника.
// Затем напишите класс ProductionWorker (Рабочий), который является подклассом
// класса Employee.
// Класс ProductionWorker содержит:
// • номер смены (целое число, к примеру, 1, 2 или 3);
// • ставка почасовой оплаты труда.
// Напишите методы получатели и методы-модификаторы для каждого класса.
// После того как эти классы будут написаны, напишите программу, которая создает
// объект класса ProductionWorker и предлагает пользователю ввести данные по
// каждому атрибуту данных этого объекта. Сохраните данные в объекте и
// примените в этом объекте методы получатели, чтобы получить эти данные и
// вывести их на экран.

class Employee {
  nameOfEmployee;
  numberOfEmployee;

  getNameOfEmployee = () => this.nameOfEmployee;
  getNumberOfEmployee = () => this.numberOfEmployee;

  setNameOfEmployee = (nameOfEmployee) => {
    this.nameOfEmployee = nameOfEmployee;
  };
  setNumberOfEmployee = (numberOfEmployee) => {
    this.numberOfEmployee = numberOfEmployee;
  };
}

class ProductionWorker extends Employee {
  numberOfChange;
  bid;

  getNumberOfChange = () => this.numberOfChange;
  getBid = () => this.bid;

  setNumberOfChange = (numberOfChange) => {
    this.numberOfChange = numberOfChange;
  };
  setBid = (bid) => {
    this.bid = bid;
  };
}

const productionWorker = new ProductionWorker();

productionWorker.setNameOfEmployee("Evgen");
productionWorker.setNumberOfEmployee("23");
productionWorker.setNumberOfChange("1");
productionWorker.setBid("10");

console.log(productionWorker.getNameOfEmployee());
console.log(productionWorker.getNumberOfEmployee());
console.log(productionWorker.getNumberOfChange());
console.log(productionWorker.getBid());
