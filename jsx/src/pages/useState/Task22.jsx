// 1. Создайте компонент, который при каждом клике на кнопку увеличивает размер
// шрифта текста в элементе на странице.

import { useRef } from "react";

const Task22 = () => {
  const tag = useRef();

  function size1() {
    tag.current.style.fontSize = `${parseInt(tag.current.style.fontSize) - 1}px`;
  }
  function size2() {
    tag.current.style.fontSize = `${parseInt(tag.current.style.fontSize) + 1}px`;
  }

  return (
    <div>
      <p style={{ fontSize: "16px" }} ref={tag}>
        TEXT
      </p>
      <button onClick={size1}>size --</button>
      <button onClick={size2}>size ++</button>
    </div>
  );
};

export default Task22;
