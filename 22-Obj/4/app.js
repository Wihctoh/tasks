// На входе статичный объект. Необходимо вывести все четные значения объекта.

const obj = {
  num1: 1,
  num2: 2,
  num3: 3,
  num4: 4,
  num5: 5,
  num6: 6,
  num7: 7,
  num8: 8,
};

for (let key in obj) {
  if (obj[key] % 2 === 0) {
    console.log(obj[key]);
  }
}
