// На вход подается число произвольной длины. Необходимо обратиться к каждому
// значению числа и выявить четность/нечетность
// 1234 -> 1 неч 2 чет 3 неч 4 чет
// 444444 -> 4 чет 4 чет 4 чет 4 чет 4 чет 4 чет

const num = "1234567";
let result = "";

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    console.log(`${num[i]} чет`);
  } else console.log(`${num[i]} нечет`);
}

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    result += num[i] + " " + "чет" + " ";
  } else result += num[i] + " " + "нечет" + " ";
}

console.log(result);
