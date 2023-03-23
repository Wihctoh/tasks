// Реализуйте класс Сonversion, сдержащий метод do DecimalNumber, преобразующий
// все числа 10 системы счисления в 2

class Conversation {
  doDecimalNumber(num) {
    try {
      let arr = [num];
      let resultArr = [];

      arr.push(Math.floor(num / 2));

      for (let i = 1; i < num; i++) {
        let floorNum = Math.floor(arr[i] / 2);

        if (floorNum !== 0) {
          arr.push(floorNum);
        } else {
          arr.push(Math.round(arr[i] / 2));

          break;
        }
      }

      for (let i = 0; i < arr.length - 1; i++) {
        resultArr.push(arr[i] % 2);
      }

      return resultArr.reverse().join("");
    } catch (error) {
      return error.message;
    }
  }
}

const conversation = new Conversation();

console.log(conversation.doDecimalNumber(375));
