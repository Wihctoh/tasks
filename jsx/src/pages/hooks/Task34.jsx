// 2. Создайте компонент, который отображает список элементов с кнопками
// "Удалить". При нажатии на кнопку элемент должен быть удален из списка.
// Используйте useCallback, чтобы оптимизировать функцию удаления элемента.

import { useCallback, useState } from "react";

const Task34 = () => {
  const [value, setValue] = useState(["task1", "task2", "task3"]);

  const del = useCallback(
    function (e) {
      const filtered = value.filter((el) => el !== e.target.id);
      setValue(filtered);
    },
    [value]
  );

  return (
    <div>
      {value.map((el, index) => (
        <p key={index} style={{ display: "flex", gap: "1%" }}>
          {el}
          <button id={el} onClick={del}>
            delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Task34;
