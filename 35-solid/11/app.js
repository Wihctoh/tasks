// Реализуйте класс Сonversion, сдержащий метод doOctalNumber, преобразующий
// все числа 10 системы счисления в 8

class Conversation {
  doDecimalNumber(num) {
    try {
      let arr = [num];
      let resultArr = [];

      arr.push(Math.floor(num / 8));

      for (let i = 1; i < num; i++) {
        let floorNum = Math.floor(arr[i] / 8);

        if (floorNum !== 0) {
          arr.push(floorNum);
        } else {
          arr.push(Math.round(arr[i] / 8));

          break;
        }
      }

      for (let i = 0; i < arr.length - 1; i++) {
        resultArr.push(arr[i] % 8);
      }

      return resultArr.reverse().join("");
    } catch (error) {
      return error.message;
    }
  }
}

const conversation = new Conversation();

console.log(conversation.doDecimalNumber(375));
