// 2. Счетчик с использованием useState и useEffect: Создайте компонент счетчика,
// который увеличивает значение счетчика на 1 каждую секунду с использованием
// useEffect

import { useState, useEffect } from "react";

const Task23 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const data = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(data);
    };
  }, [count]);

  return <div>{count}</div>;
};

export default Task23;
