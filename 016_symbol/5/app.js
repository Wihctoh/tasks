// На вход подается url. Необходимо вывести содержимое url после протокола
// (http/https)
// https://www.instagram.com/hschool.official/ -> www.instagram.com/hschool.official/

const url = "https://www.instagram.com/hschool.official/".trim().toLowerCase();

console.log(url.slice(url.indexOf("/") + 2));
