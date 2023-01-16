// Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx.'

const date = prompt("введите дату в формате ххх-хх-хх").trim().toLowerCase();

console.log(isNaN(date) ? date.replaceAll("-", ".") + "." : "error");
