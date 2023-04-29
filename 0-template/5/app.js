const pwd = "abec";

const str = "abcdefghijklmnopqrstuvwxyzabc";
let newPwd = "";

for (let i = 0; i < pwd.length; i++) {
  newPwd += str[str.indexOf(pwd[i]) + 2];
}

console.log(newPwd);
