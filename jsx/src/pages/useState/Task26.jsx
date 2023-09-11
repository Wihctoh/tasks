// 3. Реализуйте компонент, который отслеживает количество кликов на кнопку с
// помощью useRef и выводит это число при каждом клике.
import { useRef } from "react";

const Task26 = () => {
  const click = useRef(0);

  function clicked() {
    click.current.textContent = +click.current.textContent + 1;
    console.log(click.current);
  }

  return (
    <div>
      <p ref={click}>0</p>
      <button onClick={clicked}>click</button>
    </div>
  );
};

export default Task26;
