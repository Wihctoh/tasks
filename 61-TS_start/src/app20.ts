// На вход подается число произвольной длины. Необходимо обратиться к каждому
// значению числа и выявить четность/нечетность
// 1234 -> 1 неч 2 чет 3 неч 4 чет
// 444444 -> 4 чет 4 чет 4 чет 4 чет 4 чет 4 чет

const newStr: string = "1234";
let res999: string = "";

for (let i = 0; i < newStr.length; i++) {
  if (+newStr[i] % 2 === 0) {
    res999 += newStr[i] + " чет ";
  } else res999 += newStr[i] + " неч ";
}

console.log(res999);
