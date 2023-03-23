// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide

class DomHtml {
  chechEvent() {
    document.querySelector("button").addEventListener("click", () => {
      const inp1 = document.querySelector(".inp1").value;
      const inp2 = document.querySelector(".inp2").value;

      this.doPlus(inp1, inp2);
      this.doMinus(inp1, inp2);
      this.doMultiply(inp1, inp2);
      this.doDivide(inp1, inp2);
    });
  }
  doPlus(inp1, inp2) {
    let sumDiv = document.querySelector(".out1");

    sumDiv.innerHTML = `Результат суммы: ${+inp1 + +inp2}`;
  }
  doMinus(inp1, inp2) {
    let minusDiv = document.querySelector(".out2");

    minusDiv.innerHTML = `Результат разности: ${+inp1 - +inp2}`;
  }
  doMultiply(inp1, inp2) {
    let multiplyDiv = document.querySelector(".out3");

    multiplyDiv.innerHTML = `Результат произведения: ${+inp1 * +inp2}`;
  }
  doDivide(inp1, inp2) {
    let divideDiv = document.querySelector(".out4");

    divideDiv.innerHTML = `Результат деления: ${+inp1 / +inp2}`;
  }
}

const doHtml = new DomHtml();

doHtml.chechEvent();
