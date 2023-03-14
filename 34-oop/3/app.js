// Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной первую
// букву каждого слова этой строки.

class WordString {
  isValid(str) {
    if (!isNaN(str)) throw new Error("is number");
  }

  reverseString(str) {
    try {
      this.isValid(str);

      console.log(str.split("").reverse().join(""));
    } catch (error) {
      console.log(error.message);
    }
  }

  upperFirst(str) {
    try {
      this.isValid(str);

      let result = str[0].toUpperCase() + str.slice(1);

      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }

  upperEvery(str) {
    try {
      this.isValid(str);

      let res = str.toLowerCase().split(" ");
      let upperStr = "";

      for (let i = 0; i < res.length; i++) {
        upperStr += res[i][0].toUpperCase() + res[i].slice(1) + " ";
      }

      console.log(upperStr);
    } catch (error) {
      console.log(error.message);
    }
  }
}

const wordString = new WordString();

wordString.reverseString("test");
wordString.upperFirst("test");
wordString.upperEvery("test qwerty");
