// 3. Создайте компонент для отображения списка чисел от 1 до N, где N - число,
// введенное пользователем с клавиатуры. Используйте useMemo, чтобы вычислить
// список чисел только при изменении N.

import { useState, useMemo } from "react";

const Task33 = () => {
  const [value, setValue] = useState(0);

  const arr = [];

  function show() {
    for (let i = 0; i <= value; i++) {
      arr.push(i);
    }
  }
  useMemo(show, [value]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(+e.target.value)} />

      {arr.map((el, index) => (
        <h1 key={index}>{el}</h1>
      ))}
    </div>
  );
};

export default Task33;
