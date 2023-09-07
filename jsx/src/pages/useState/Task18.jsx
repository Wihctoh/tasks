// 5. Список задач с использованием useState: Создайте компонент списка задач,
// который позволяет пользователю добавлять и удалять задачи из списка.
import { useState } from "react";

const Task18 = () => {
  const tasks = [];

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState(tasks);

  function addTask(e) {
    setValue1(e.target.value);
  }
  function add() {
    setValue2([...value2, value1]);
  }

  function del(e) {
    const res = value2.filter((el) => el !== e.target.id);
    setValue2(res);
  }

  return (
    <div>
      <input onChange={addTask} type="text" />
      <button onClick={add}>+</button>
      {value2.map((el, index) => (
        <div className="wrapper" key={index}>
          <p>
            {el}
            <button onClick={del} id={el}>
              -
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Task18;
