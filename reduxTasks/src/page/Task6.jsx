// 6. Создайте компонент, который отображает проверку почты (true, false) на
// валидность регулярному выражению. Валидатор состоит из Input для ввода почты
// и кнопки для запуска валидатора.
import { useSelector, useDispatch } from "react-redux";
import { check, fill } from "../slice/checkEmail";
const Task6 = () => {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.checkEmail);
  return (
    <div>
      <input type="text" onChange={(e) => dispatch(fill(e.target.value))} />
      <button onClick={() => dispatch(check())}>check</button>
      <h1>{String(result)}</h1>
    </div>
  );
};

export default Task6;
