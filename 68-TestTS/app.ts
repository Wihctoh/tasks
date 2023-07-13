// 1. Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
// и возвращает true, если оно является палиндромом (читается одинаково слева
// направо и справа налево), и false в противном случае.

function isPalindrome(word: string | number): boolean {
  try {
    if (!word) throw new Error("word is empty");
    if (typeof word === "number") throw new Error("word cant be a number!");

    return word.trim().toLowerCase().split("").reverse().join("") === word
      ? true
      : false;
  } catch (error: any) {
    return error.message;
  }
}

// 2. Напишите функцию calculateFactorial(n: number): number, которая принимает
// число n и возвращает его факториал.

function calculateFactorial(n: number | string): number {
  try {
    if (typeof n === "string") throw new Error("arguments cant be a string");
    if (!n) throw new Error("empty value!");

    let res: number = 1;

    for (let i = 1; i <= n; i++) {
      res *= i;
    }

    return res;
  } catch (error: any) {
    return error.message;
  }
}

// 3. Напишите функцию capitalizeString(str: string): string, которая принимает строку и
// возвращает новую строку, в которой каждое слово начинается с заглавной буквы.

function capitalizeString(str: string | number): string {
  try {
    if (!str) throw new Error("empty value!");
    if (typeof str === "number") throw new Error("values cant be a number!");

    const newStr: string[] = str.split(" ");
    let res: string = "";

    for (let i = 0; i < newStr.length; i++) {
      res += newStr[i][0].toUpperCase() + newStr[i].slice(1) + " ";
    }

    return res.trim();
  } catch (error: any) {
    return error.message;
  }
}

// 8. Создайте класс StringArray, который имеет свойство array (массив строк) и методы:
// getLongestWord(): string - возвращает самое длинное слово из массива.
// getUniqueWords(): string[] - возвращает массив уникальных слов из массива.

class StringArray {
  array: string[] = ["qwe", "qwe", "qweqweqwe"];

  getLongestWord(): string {
    try {
      if (this.array.length === 0) throw new Error("empty values!");

      let temp: string = this.array[0];

      for (let i = 0; i < this.array.length; i++) {
        if (temp.length < this.array[i].length) {
          temp = this.array[i];
        }
      }

      return temp;
    } catch (error: any) {
      return error.message;
    }
  }

  getUniqueWords(): string[] {
    try {
      if (this.array.length === 0) throw new Error("empty values!");

      let arr: string[] = [];

      for (let i = 0; i < this.array.length; i++) {
        if (!arr.includes(this.array[i])) {
          arr.push(this.array[i]);
        }
      }

      return arr;
    } catch (error: any) {
      return error.message;
    }
  }
}

// 9. Создайте класс NumberArray, который имеет свойство array (массив чисел) и
// методы:
// getSum(): number - возвращает сумму всех чисел в массиве.
// getEvenNumbers(): number[] - возвращает массив только четных чисел из массива.

class NumberArray {
  array: number[] = [1, 2, 3, 4];

  getSum(): number {
    try {
      const summ = this.array.reduce((sum, el) => el + sum, 0);

      return summ;
    } catch (error: any) {
      return error.message;
    }
  }

  getEvenNumbers(): number[] {
    try {
      const filtered = this.array.filter((el) => el % 2 === 0);

      return filtered;
    } catch (error: any) {
      return error.message;
    }
  }
}

export {
  isPalindrome,
  calculateFactorial,
  capitalizeString,
  StringArray,
  NumberArray,
};
