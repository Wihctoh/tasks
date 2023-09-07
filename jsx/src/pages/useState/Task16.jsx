// 3. Отображение текста с использованием useState: Создайте компонент, который
// предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать"
// отображается текст, а при нажатии на "Скрыть" текст скрывается.

import { useState } from "react";

const Task16 = () => {
  const [value, setValue] = useState(true);

  return (
    <div>
      <p>{value ? "hello" : ""}</p>
      <button onClick={() => setValue(true)}>show</button>
      <button onClick={() => setValue(false)}>hide</button>
    </div>
  );
};

export default Task16;
