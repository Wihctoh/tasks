// На вход подается строка в виде электронной почты. Если строка содержит “@” и
// оканчивается на .com, .ru, то вывести true, иначе false

const str = "epicstore@gmail.com";

if ((str.includes("@") && str.endsWith(".com")) || str.endsWith(".ru")) {
  console.log(true);
} else console.log(false);
