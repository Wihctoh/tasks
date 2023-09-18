// 1. Создайте компонент счетчика, который может увеличивать или уменьшать
// значение при нажатии на соответствующие кнопки.

import { useReducer } from "react";

function reducer(state, action) {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;

    default:
      break;
  }
}

const Task39 = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch("INCREMENT")}>++</button>
      <button onClick={() => dispatch("DECREMENT")}>--</button>
    </div>
  );
};

export default Task39;
