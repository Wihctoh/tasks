// На входе массив чисел. На основе этого массива сформировать объект, где ключ –
// число массива, значение – true/false. True – число четное, false – нечетное

const arr = [1, 2, 3, 4, 5, 6];
let obj = {};
let arrRes = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    arrRes.push(true);
    obj[i] = arrRes[i];
  } else {
    arrRes.push(false);
    obj[i] = arrRes[i];
  }
}

console.log(obj);
