// На вход программе подается строка, где каждое слово заканчивается “_”.
// Программа должна убрать “_” и первую букву каждого слова (помимо первого),
// преобразовать в верхний регистр

// const str = prompt('').trim().toUpperCase();
// let b = str.slice(1);

const str = "abc_qwe_asd_bcd_".trim().toUpperCase().split("_");
let result = "";

for (let i = 0; i < str.length - 1; i++) {
  result = `${result} ${str.slice(1)[i].slice(1)}`;
}

console.log(str[0] + result);
