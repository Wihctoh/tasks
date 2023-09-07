// 2. Форма с использованием useState: Создайте компонент текстового поля, который
// позволяет пользователю вводить текст и отображает его в реальном времени.

import { useState } from "react";

const Task15 = () => {
  const [state, setState] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setState(e.target.value)} />
      <p>{state}</p>
    </div>
  );
};

export default Task15;
