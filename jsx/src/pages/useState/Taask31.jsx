// 1. Создайте компонент React, который отображает сумму двух чисел. Используй хук
// useState для хранения значений чисел и хук useMemo для кэширования
// результата суммы. При изменении значений чисел, сумма должна
// пересчитываться только тогда, когда необходимо.

import { useState, useMemo } from "react";

const Task31 = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [res, setRes] = useState();

  const calc = () => {
    setRes(value1 + value2);
  };

  useMemo(calc, [value1, value2]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue1(+e.target.value)} />
      <input type="text" onChange={(e) => setValue2(+e.target.value)} />

      <p>{res}</p>
    </div>
  );
};

export default Task31;
