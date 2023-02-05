// На входе статичный объект. Необходимо посчитать количество пар (ключ:значение)

const obj = {
  name: "evgen",
  age: "16",
  country: "Belarus",
};
let result = 0;

for (let key in obj) {
  if (obj[key]) {
    result++;
  }
}

console.log(result);
