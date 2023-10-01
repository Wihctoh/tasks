// 3. Создайте компонент текстового поля, который позволяет пользователю вводить
// текст и отображает его в реальном времени.

import { fill } from "../slice/inpValue";
import { useDispatch, useSelector } from "react-redux";

const Task3 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.inpValue);

  return (
    <>
      <h1>{state}</h1>
      <input type="text" onChange={(e) => dispatch(fill(e.target.value))} />
    </>
  );
};

export default Task3;
