// 4. Таймер с использованием useState и useEffect: Создайте компонент, который
// отображает текущее время и обновляет его каждую секунду.

import { useState, useEffect } from "react";

const Task27 = () => {
  const [data, setData] = useState(Date());
	
  useEffect(() => {
    const time = setTimeout(() => {
      setData(Date());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [data]);

  return <div>{data}</div>;
};

export default Task27;
