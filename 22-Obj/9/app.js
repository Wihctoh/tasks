// На входе статичный объект. Необходимо посчитать количество пар
// (ключ: значение) где значение число и вывести количество

const obj = {
  name: "evgen",
  age: 20,
  country: "bel",
  weight: 80,
};
let result = 0;

for (let key in obj) {
  if (!isNaN(obj[key])) {
    result++;
  }
}

console.log(result);
