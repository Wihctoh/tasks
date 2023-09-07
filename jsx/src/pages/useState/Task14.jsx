// 1. Счетчик с использованием useState: Создай компонент React, который отображает
// числовое значение и кнопки "+1" и "-1". Используйте хук useState для управления
// состоянием счетчика. При нажатии на кнопки, значение счетчика должно
// увеличиваться или уменьшаться.

import { useState } from "react";

const Task14 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>count++</button>
      <button onClick={() => setCount(count - 1)}>count--</button>
    </div>
  );
};

export default Task14;
