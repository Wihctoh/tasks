// На входе статичный объект. Необходимо сформировать массив из всех нечетных
// ключей объекта.

const obj = {
  1: "fqdf",
  2: "wfdf",
  3: "fedf",
  4: "frdf",
  5: "fwdf",
  6: "ftdf",
  7: "fdsf",
  8: "asd",
};

const arr = [];

for (let key in obj) {
  if (key % 2 !== 0) {
    arr.push(key);
  }
}

console.log(arr);
