// Реализуйте класс Сonversion, сдержащий метод doBinaryNumber, преобразующий
// все числа 2 системы счисления в 10

class Conversation {
  doBinaryNumber(num) {
    try {
      let res = [];
      let n = num.length - 1;

      for (let i = 0; i < num.length; i++) {
        res.push(num[i] * 2 ** n);
        n--;
      }
      const sum = res.reduce((sum, el) => {
        return +el + sum;
      }, 0);

      return sum;
    } catch (error) {
      return error.message;
    }
  }
}

const conversation = new Conversation();

console.log(conversation.doBinaryNumber("1101"));
