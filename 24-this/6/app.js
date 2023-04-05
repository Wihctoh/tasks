// Работа с замыканием. Реализуйте функцию, которая будет считать количество
// своих вызовов

function doCount() {
  let res = 0;

  return (a) => {
    res += a;
    console.log(res);
  };
}

const resultFunc = doCount();

resultFunc(1);
resultFunc(2);
resultFunc(1);
resultFunc(1);
