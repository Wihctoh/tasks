// 5. Разработайте компонент, который позволяет пользователю изменять цвет фона
// элемента с помощью кнопок "Следующий цвет" и "Предыдущий цвет", используя
// useRef.

import { useRef } from "react";

const Task28 = () => {
  const colorArr = ["red", "green", "blue"];
  const background = useRef();

  let count1 = 0;
  let count2 = colorArr.length;

  function swapColor1() {
    background.current.style.color = colorArr[count1];
    if (count1 >= colorArr.length - 1) {
      count1 = 0;
    } else count1++;
  }

  function swapColor2() {
    background.current.style.color = colorArr[count2];
    if (count2 <= 0) {
      count2 = colorArr.length - 1;
    } else count2--;
  }

  return (
    <div>
      <p ref={background}>TEXT</p>
      <button onClick={swapColor2}>prev color</button>
      <button onClick={swapColor1}>next color</button>
    </div>
  );
};

export default Task28;
