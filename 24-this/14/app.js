// Напишите функцию, генерирующую пароль из 8 символов. (Math.random)

function doPassword() {
  console.log(Math.round(Math.random() * 100000000));
}

doPassword();
