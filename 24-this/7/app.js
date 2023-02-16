// Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом
// последующем вызове функции

function concat() {
  let str = "hello" + " ";

  return function (a) {
    str += a;
    console.log(str);
  };
}

let result = concat();

result("hello" + " ");
result("hello" + " ");
