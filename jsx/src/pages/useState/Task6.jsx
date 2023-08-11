// 6. Создайте стейт number, setNumber. Первоначальное значение 1. Компонент
// возвращает кнопку и параграф, в котором отображается значение состояния
// number с помощью jsx. Ваша задача так реализовать функционал, чтобы при клике
// на кнопку автоматически прибавлялась +1 к стейту number

import React from "react";
import { useState } from "react";

const Task6 = () => {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+1</button>
    </div>
  );
};

export default Task6;
