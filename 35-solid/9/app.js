// Реализуйте класс Сonversion, сдержащий метод do DecimalNumber, преобразующий
// все числа 10 системы счисления в 2

class Conversation {
  doDecimalNumber(num) {
    let arr = [];
    let result = [];

    arr.push(Math.floor(num / 2));

    for (let i = 0; i < num; i++) {
      let floorNum = Math.floor(arr[i] / 2);

      if (floorNum !== 0) {
        arr.push(floorNum);
      } else {
        arr.push(Math.round(arr[i] / 2));

        break;
      }
    }
    arr.unshift(num);

    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] % 2);
    }

    return result.reverse().slice(1);
  }
}

const conversation = new Conversation();

console.log(conversation.doDecimalNumber(100));
