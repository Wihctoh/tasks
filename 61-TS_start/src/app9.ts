// Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.

const str5: string = "qqwwweeerrrrr";
const obj = {};

for (let i = 0; i < str5.length; i++) {
  if (obj[str5[i]]) {
    obj[str5[i]] += 1;
  } else {
    obj[str5[i]] = 1;
  }
}

console.log(obj);

