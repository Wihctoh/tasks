// Создай компонент, который будет отслеживать количество кликов по кнопке и отображать это количество
import { useState } from "react";

const Task10 = () => {
  const [clickCount, setClickCount] = useState(0);

  function showClick() {
    setClickCount(clickCount + 1);
    console.log(clickCount);
  }

  return (
    <div>
      <button onClick={showClick}>click me!</button>
    </div>
  );
};

export default Task10;
