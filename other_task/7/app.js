// На входе строка. Необходимо реализовать алгоритм, убирающий дублирующие
// символы в строке
// hschoolofficial -> hscolfia

const str = "hschoolofficialaaasss";
let result = "";

for (let i = 0; i < str.length; i++) {
  if (!result.includes(str[i])) {
    result += str[i];
  }
}

console.log(result);
