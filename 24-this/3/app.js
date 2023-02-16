// Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru. False в противном случае

let email = "hanna@gmail.com";

function doEmail(email_) {
  let obj = {};
  obj.email = email_;
  if (
    email_.includes("@") &&
    (email_.includes(".com") || email_.includes(".com"))
  ) {
    obj.active = true;
    return obj;
  } else {
    obj.active = false;
    return obj;
  }
}

let resObj = doEmail(email);

console.log(resObj);
