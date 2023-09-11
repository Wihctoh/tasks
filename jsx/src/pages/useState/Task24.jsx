// 2. Создайте компонент, который при фокусе на текстовом поле добавляет
// background.

import { useRef } from "react";

const Task24 = () => {
  const background = useRef();

  const arr = ["red", "green", "blue", "orange"];

  function change1() {
    background.current.style.backgroundColor = `${arr[Math.round(Math.random() * arr.length)]}`;
  }

  function change2() {
    background.current.style.backgroundColor = `${arr[Math.round(Math.random() * arr.length)]}`;
  }

  return (
    <div>
      <input ref={background} onMouseOver={change1} onMouseLeave={change2} />
    </div>
  );
};

export default Task24;
