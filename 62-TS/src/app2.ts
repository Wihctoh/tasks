// Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a.

const str22: string | string[] = "qwes asdvf zxcsa".split(" ");

const filteredd: string[] = str22.filter((el) => el.includes("a"));

console.log(filteredd);
