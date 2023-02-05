// На входе статичный объект. Необходимо вывести все числовые ключи.

const obj = {
  1: "test",
  2: "test1",
  test3: 3,
};

for (let key in obj) {
  if (!isNaN(key)) {
    console.log(key);
  }
}
