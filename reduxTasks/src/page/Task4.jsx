// 4. Создайте компонент формы. По клику на кнопку собрать данные из input и
// проверить вводимую строку на палиндром
import { useDispatch, useSelector } from "react-redux";
import { fillForm, check } from "../slice/inpForm";
const Task4 = () => {
  const dispatch = useDispatch();
  const { input, result } = useSelector((state) => state.inpForm);
  return (
    <div>
      <h1>{input}</h1>
      <h1>{String(result)}</h1>
      <input type="text" onChange={(e) => dispatch(fillForm(e.target.value))} />
      <button onClick={() => dispatch(check())}>check</button>
    </div>
  );
};

export default Task4;
