// 4. Создайте компонент, который предоставляет пользователю выбор цвета из
// списка. При выборе цвета, компонент должен отображать выбранный цвет на
// странице. Используйте useCallback, чтобы оптимизировать функцию выбора
// цвета.
import { useState, useCallback } from "react";

const Task37 = () => {
  const arr = ["red", "green", "blue"];
  const [color, setColor] = useState("color");

  const change = useCallback(
    function () {
      setColor(arr[Math.round(Math.random() * (arr.length - 1))]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [color]
  );

  return (
    <div style={{ backgroundColor: `${color}`, height: "100vh" }}>
      <button onClick={change}>{color}</button>
    </div>
  );
};

export default Task37;
