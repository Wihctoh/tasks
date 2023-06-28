// . Создайте переменную str и присвойте ей строковое значение. Используя метод
// replace и цикл while, замените все гласные символы в строке на символ *.

let srt2: string = "qwertyu";
let test: string = "";
let i = 0;

while (i < srt2.length) {
  test += /[aeiou]+/gm.test(srt2[i]) ? "*" : srt2[i];

  i++;
}

