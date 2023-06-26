// Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.
const arrNumer = ["qwe", "nnaa", "anna"];
const filteredTask = arrNumer.filter((el) => el.toLowerCase() === el.toLowerCase().split("").reverse().join(""));
console.log(filteredTask);
