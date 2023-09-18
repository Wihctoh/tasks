// 5. Создайте компонент, который позволяет пользователю добавлять и удалять
// элементы из списка. Используйте useCallback, чтобы оптимизировать функции
// добавления и удаления элементов.
import { useState, useCallback } from "react";

const Task38 = () => {
  const [value, setValue] = useState(["elem1", "elem2", "elem3", "elem4"]);
  const [inpValue, setInpValue] = useState("");

  const add = useCallback(
    function () {
      setValue([...value, inpValue]);
      setInpValue("");
    },
    [value, inpValue]
  );

  const del = useCallback(
    function (e) {
      const filtered = value.filter((el) => el !== e.target.id);
      setValue(filtered);
    },
    [value]
  );

  return (
    <div>
      <input type="text" onChange={(e) => setInpValue(e.target.value)} value={inpValue} />
      <button onClick={add}>add</button>

      {value.map((el, index) => (
        <p key={index}>
          {el}
          <button id={el} onClick={del}>
            del
          </button>
        </p>
      ))}
    </div>
  );
};

export default Task38;
