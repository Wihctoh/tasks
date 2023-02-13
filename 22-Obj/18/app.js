// Вывести в консоль массив объектов

// const obj1 = {
//   id: "javascript",
//   label: "JavaScript",
//   category: "programmingLanguages",
//   priority: 1,
// };

// const obj2 = {
//   id: "typescript",
//   label: "TypeScript",
//   category: "programmingLanguages",
//   priority: 1,
// };
// const obj3 = {
//   id: "sql",
//   label: "SQL",
//   category: "programmingLanguages",
//   priority: 2,
// };
// const obj4 = {
//   id: "java",
//   label: "Java",
//   category: "programmingLanguages",
//   priority: 3,
// };
// const obj5 = {
//   id: "go",
//   label: "GO",
//   category: "programmingLanguages",
//   priority: 3,
// };

// let arr = []
// arr.push(obj1, obj2, obj3, obj4, obj5)

// console.log(arr);

// На входе объект вида
// { "label": "Test", "category": "test", "priority": 1 },
// Неоходимо запушить в БД объект только в том случае, если нет совпадений по
// label.
// Если совпадения нет, то в объект клиента добавить ключ id со значением label в
// toLowerCase таким образом, чтобы в БД был запушен объект вида
// {"id": "test" "label": "Test", "category": "test", "priority": 1 },
// Если совпадение есть – ошибка

const obj = { label: "Test", category: "test", priority: 1 };
