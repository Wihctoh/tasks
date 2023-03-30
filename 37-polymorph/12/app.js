// Работа с геттерами и сеттерами. Реализуйте класс Validator. Класс содержит
// getEmail, setEmail, а также метод IsEmail, проверяющий, является ли входная строка
// корректным email (Если является - возвращает true, если не является - false.
// Вызвать из экземпляра класса методы setEmail. getEmail, isEmail

// class Validator {
//   email;

//   getEmail() {
//     return this.email;
//   }
//   setEmail(email) {
//     this.email = email;
//   }

//   IsEmail() {
//     try {
//       if (!/^[\w\.]+\@[\w]+\.[a-z]{2,}$/gm.test(this.email))
//         throw new Error("not a email!");
//       return true;
//     } catch (error) {
//       return error.message;
//     }
//   }
// }

// const validator = new Validator();

// validator.setEmail("qwewq@asd.com");

// let result = validator.IsEmail();
// console.log(result);

class Validator {
  constructor(email) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  IsEmail() {
    try {
      if (!/^[\w\.]+\@[\w]+\.[a-z]{2,}$/gm.test(this.email))
        throw new Error("not a email!");
      return true;
    } catch (error) {
      return error.message;
    }
  }
}

const validator = new Validator("qwewq@asd.com");

let result = validator.IsEmail();
console.log(result);
