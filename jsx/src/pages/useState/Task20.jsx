// 1. Изменение размера шрифта с использованием useState: Создайте компонент,
// который предоставляет две кнопки: "Увеличить" и "Уменьшить". При нажатии на
// эти кнопки значение font-size изменяется соответствующим образом на +/– 1px.

import { useState } from "react";

const Task20 = () => {
  const [textSize, setTextSize] = useState(16);

  function plusTextSize() {
    setTextSize(textSize + 1);
  }

  function minusTextSize() {
    setTextSize(textSize - 1);
  }

  return (
    <div>
      <p style={{ fontSize: `${textSize}px` }}>text</p>
      <button onClick={plusTextSize}>+ textSize</button>
      <button onClick={minusTextSize}>- textSize</button>
    </div>
  );
};

export default Task20;
