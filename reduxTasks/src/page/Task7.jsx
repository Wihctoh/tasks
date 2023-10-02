// 7. Создайте компонент, который отображает сумму значений input. Компонент
// состоит из Input для ввода математического значения и кнопки сложения для
// высчитывания результата внутри строки.
import { useSelector, useDispatch } from "react-redux";
import { summ, fill1, fill2 } from "../slice/sum";
const Task7 = () => {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.sum);

  return (
    <div>
      <h1>{String(result)}</h1>
      <input type="text" onChange={(e) => dispatch(fill1(e.target.value))} />
      <input type="text" onChange={(e) => dispatch(fill2(e.target.value))} />
      <button onClick={() => dispatch(summ())}>sum</button>
    </div>
  );
};

export default Task7;
