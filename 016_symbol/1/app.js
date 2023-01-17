// Подается строка из нескольких слов. Необходимо добавить тире между словами

const str = prompt("введите строку").toLowerCase().trim();

console.log(str.split(" ").join("-"));
console.log(str.replaceAll(" ", "-"));
