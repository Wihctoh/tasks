// На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты

const emailStr: string[] = ["qweweq@asda.ru", "qweweq@asda.ru"];

const everArr: boolean = emailStr.every((el) =>
  /^[a-zA-Z0-9\_]+\@+[a-z]{4,}\.[ru|com]+$/gm.test(el)
);

console.log(everArr);
