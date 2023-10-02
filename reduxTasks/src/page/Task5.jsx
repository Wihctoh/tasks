// 5. Создайте компонент, который предоставляет две кнопки: "Показать" и "Скрыть".
// При нажатии на "Показать" отображается текст, а при нажатии на "Скрыть" текст
// скрывается.
import { useSelector, useDispatch } from "react-redux";
import { showHide } from "../slice/showText";

const Task5 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.showText);
  return (
    <div>
      <button onClick={() => dispatch(showHide())}>show</button>
      <button onClick={() => dispatch(showHide())}>hide</button>

      <h1>{state ? "hello" : ""}</h1>
    </div>
  );
};

export default Task5;
