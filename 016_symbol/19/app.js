// На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4; Г – 2; Ц – 3; Т – 5

const str = "АааГГЦЦцТТтттА".trim().toLowerCase();
let result1 = 0;
let result2 = 0;
let result3 = 0;
let result4 = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "а") {
    result1 += 1;
  } else if (str[i] === "г") {
    result2 += 1;
  } else if (str[i] === "ц") {
    result3 += 1;
  } else if (str[i] === "т") {
    result4 += 1;
  }
}

console.log(`А - ${result1}; Г - ${result2}; Ц - ${result3}; Т - ${result4}`);
