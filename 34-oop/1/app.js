// Реализуйте класс Singer, который будет иметь следующие свойства: name,
// surname. Также класс должен иметь метод getAutograph, который будет выводить
// “{name} {surname), с наилучшими пожеланиями”.

// class Singer {
//   name;
//   surname;

//   getAutograph() {
//     try {
//       return `${this.name} ${this.surname}, с наилучшими пожеланиями`;
//     } catch (error) {
//       return error.message;
//     }
//   }
// }

// const singer = new Singer();

// singer.name = "evgen";
// singer.surname = "zzh";

// console.log(singer.getAutograph());

// class Singer {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   getAutograph() {
//     try {
//       return `${this.name} ${this.surname}, с наилучшими пожеланиями`;
//     } catch (error) {
//       return error.message;
//     }
//   }
// }

// const singer = new Singer("kate", "zzh");

// console.log(singer.getAutograph());

class Singer {
  getAutograph(name, surname) {
    try {
      return `${name} ${surname}, с наилучшими пожеланиями`;
    } catch (error) {
      return error.message;
    }
  }
}
const singer = new Singer();

console.log(singer.getAutograph("kate", "zzh"));
