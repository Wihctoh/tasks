// 2. Разработайте компонент, который выполняет факториал числа при вводе
// значения в текстовое поле. Используйте useMemo, чтобы кэшировать результаты
// вычислений для разных введенных значений и отображать их без повторных
// вычислений.

import { useState, useMemo } from "react";

const Task32 = () => {
  const [value, setValue] = useState(0);
  const [res, setRes] = useState(0);

  function calc(value) {
    return value ? value * calc(value - 1) : 1;
  }

  function getCalc() {
    setRes(calc(value));
  }

  useMemo(getCalc, [value]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(+e.target.value)} />
      <p>{res}</p>
    </div>
  );
};

export default Task32;
