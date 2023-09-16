// 2. Создайте компонент с лампочкой и кнопкой, которая позволяет включать и
// выключать лампочку. Под лампочкой предполагается кнопка button с
// соответствующим текстом

import { useReducer } from "react";

function reducer(state, action) {
  switch (action) {
    case "SWITCH":
      return !state;

    default:
      break;
  }
}

const Task1 = () => {
  const [state, dispatch] = useReducer(reducer, false);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "300px" }}>
      <h1 style={{ backgroundColor: `${state ? "#eab308" : "#fff"}` }}>LAMP</h1>
      <button onClick={() => dispatch("SWITCH")}>{state ? "OFF" : "ON"}</button>
    </div>
  );
};

export default Task1;
