// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

const url = prompt("введите url").toLowerCase().trim();

if (isNaN(url)) {
  if (
    (url.startsWith("http") && url.endsWith(".com")) ||
    url.endsWith(".ru") ||
    url.includes("/")
  ) {
    console.log(true);
  } else console.log(false);
} else console.log("error");
