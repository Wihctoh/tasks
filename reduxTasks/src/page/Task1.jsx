// 1. Создайте компонент инкремента. Компонент возвращает кнопку и параграф, в
// котором отображается значение (первоначальное значение 1). Ваша задача так
// реализовать функционал, чтобы при клике на кнопку автоматически
// прибавлялась +1 к значению параграфа

// 2. Создайте компонент, который будет отображать числовое значение и кнопки "+1"
// и "-1". При нажатии на кнопку увеличивать и уменьшать значения счетчика.

import { countPlus, countMinus } from "../slice/increment";
import { useDispatch, useSelector } from "react-redux";

const Task1 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.increment);
  return (
    <>
      <p>{state}</p>
      <button onClick={() => dispatch(countPlus())}>count++</button>
      <button onClick={() => dispatch(countMinus())}>count--</button>
    </>
  );
};

export default Task1;
