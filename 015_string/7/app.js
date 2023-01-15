// На вход программе подаётся строка. Замените все @ на '!' с помощью глобального
// поиска и замены (2 способа)

const str = prompt("").toLowerCase();

if (isNaN(str)) {
  console.log(str.replaceAll("@", "!"));
} else {
  console.log("error");
}

console.log(isNaN(str) ? str.replaceAll("@", "!") : "error");

if (isNaN(str)) {
  console.log(str.split("@").join("!"));
} else {
  console.log("error");
}

console.log(isNaN(str) ? str.split("@").join("!") : "error");
