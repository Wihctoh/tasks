// На входе статичный объект и строка str. Необходимо найти в объекте ключ str и
// вывести true при наличии совпадения, false в противном случае

const obj = {
  name: "ez",
  lastName: "ez2",
  age: 22,
};

const str = "age";

console.log(obj.hasOwnProperty(str));
