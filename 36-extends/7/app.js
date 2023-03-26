// Реализуйте класс Word, и функцию isPalindrome которая будет выводить в alert
// соответствующее будевое значение. Если значения 2 инпутов являются
// палиндромом -> true, в противном случае false

class World {
  isPalindrome() {
    document.querySelector("button").addEventListener("click", () => {
      const inp1 = document.querySelector(".inp1");
      const inp2 = document.querySelector(".inp2");
      const div = document.querySelector("div");

      if (inp1.value == inp2.value.split("").reverse().join("")) {
        div.innerHTML = true;
      } else div.innerHTML = false;
    });
  }
}

const world = new World();

world.isPalindrome();
