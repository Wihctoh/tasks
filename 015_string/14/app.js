// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

const url = prompt("введите url").toLowerCase().trim();

if (isNaN(url)) {
  if (
    url.includes("http") ||
    url.includes("/") ||
    url.includes(".com") ||
    url.includes(".ru")
  ) {
    console.log(true);
  } else false;
} else console.log("error");
