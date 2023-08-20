// 7. Создайте стейт number, setNumber. Первоначальное значение 1. Компонент
// возвращает 2 кнопки и параграф, в котором отображается значение состояния
// number с помощью jsx. Ваша задача так реализовать функционал, чтобы при клике
// на кнопку  +1 автоматически прибавлялась +1 к стейту number При клике на -1
// вычиталось 1 числовое значение

import React from "react";
import { useState } from "react";

const Task7 = () => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <p>{number}</p>

      <button onClick={() => setNumber(number - 1)}>-1</button>
      <button onClick={() => setNumber(number + 1)}>+1</button>
    </div>
  );
};

export default Task7;
