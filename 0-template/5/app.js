const pwd = "abec";
// let cryptoPwd = "";
// const phase = 2;
// let res = "";

// const alpha = "abcdefghijklmnopqrstuvwxyzabc";

// for (let i = 0; i < pwd.length; i++) {
//   if (alpha.indexOf(pwd[i])) {
//     res += alpha[i + 2];
//   }
//   continue;
// }
// console.log(res);

const str = "abcdefghijklmnopqrstuvwxyzabc";
let newPwd = "";

for (let i = 0; i < pwd.length; i++) {
  newPwd += str[str.indexOf(pwd[i]) + 2];
}

console.log(newPwd);
