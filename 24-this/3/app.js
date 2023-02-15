// Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru. False в противном случае

let email = "hanna@gmail.com";

function doEmail(email_) {
  let obj = {};

  if (
    email_.includes("@") &&
    (email_.includes(".com") || email_.includes(".com"))
  ) {
    obj.email = email_;
    obj.active = true;
    return obj;
  } else {
    obj.email = email_;
    obj.active = false;
    return obj;
  }
}

let resObj = doEmail(email);

console.log(resObj);
