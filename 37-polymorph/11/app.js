// Реализуйте класс WordString, который содержит: конструктор со входной строкой;
// метод ReverseString(). Ваша задача перевернуть исходную строку

class WordString {
  constructor(str) {
    this.str = str;
  }

  ReverseString() {
    let revStr = this.str.split("").reverse().join("");

    return revStr;
  }
}

const wordString = new WordString("qwer");

console.log(wordString.ReverseString());
