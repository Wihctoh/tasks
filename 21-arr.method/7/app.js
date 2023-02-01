// На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
// способы обращения к первому и последнему элементам

const arr1 = ["hschool", "hschool_0", "hschool_1"];

console.log(arr1[0], arr1[2]);
console.log(arr1[arr1.length - 3], arr1[arr1.length - 1]);
console.log(arr1.indexOf("hschool"), arr1.lastIndexOf("hschool_1"));
