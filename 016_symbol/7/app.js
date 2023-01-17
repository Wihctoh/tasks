// На вход подается 1 слово. Необходимо преобразовать слово в хештег. Добавить
// проверку на ввод текстовых значений
// hSСhOol -> #hschool

const word = prompt("введите слово").trim().toLowerCase();

if (isNaN(word)) {
  console.log("#" + word);
} else console.log(false);
