// 2. Реализуйте класс Hashtag. В него передается число n – количество элементов
// массива. На основании числа формируется динамический массив из n элементов
// внутри класса. Создать функцию doHashtag, заполняющую новый массив из
// элементов, каждое значение которого имеет вид #name

class Hashtag {
  doHashtag(num) {
    try {
      let arr = [];

      for (let i = 0; i < num; i++) {
        let pr = prompt("enter a name");

        arr.push("#" + pr);
      }

      return arr;
    } catch (error) {
      return error.message;
    }
  }
}

const hashtag = new Hashtag();

const num = 3;
let newArray = hashtag.doHashtag(num);

console.log(newArray);
