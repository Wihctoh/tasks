// 3. Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике
// на кнопку статус компонента должен меняться между "Активный" и "Неактивный".
// Используйте useCallback, чтобы оптимизировать функцию изменения статуса.
import { useState, useCallback } from "react";

const Task35 = () => {
  const [value, setValue] = useState(false);

  const flag = useCallback(
    function () {
      setValue(!value);
    },
    [value]
  );

  return (
    <div>
      <p>{value ? "Active" : "Not active"}</p>
      <button onClick={flag}>change status</button>
    </div>
  );
};

export default Task35;
