// 1. Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку
// счетчик должен увеличиваться на 1. Используйте useCallback, чтобы
// оптимизировать обработчик клика на кнопке.

import { useCallback, useState } from "react";

const Task36 = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(
    function () {
      setCount(count + 1);
    },
    [count]
  );

  const decrement = useCallback(
    function () {
      setCount(count - 1);
    },
    [count]
  );

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>count++</button>
      <button onClick={decrement}>count--</button>
    </div>
  );
};

export default Task36;
