// 4. Изменение цвета с использованием useState: Создайте компонент выбора цвета,
// который позволяет пользователю выбирать цвет из списка и отображает цвет
// выбранного цвета на экране.

import { useState } from "react";

const Task17 = () => {
  const [color, setColor] = useState("");

  return (
    <div style={{ backgroundColor: `${color}`, height: "100vh" }}>
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("blue")}>blue</button>
    </div>
  );
};

export default Task17;
