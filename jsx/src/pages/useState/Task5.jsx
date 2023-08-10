// 5. По клику на кнопку собрать данные из двух input: name, surname. Работать с 1
// state, первоначальное значение которого {name: ‘’, surname: ‘’}. Проверить
// значения 2 input на пустоту. Структура state:

import React from "react";
import { useState } from "react";

const Task5 = () => {
  const [inpValue1, setInpValue1] = useState({ name: "", surname: "" });

  function isEmptyInp1(e) {
    setInpValue1({ ...inpValue1, [e.target.name]: e.target.value });
  }

  function isValid() {
    try {
      if (inpValue1.name.length === 0 || inpValue1.surname.length === 0)
        throw new Error("inputs is empty!");
      alert("inp is correct!");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <input type="text" name="name" onChange={isEmptyInp1} />
      <input type="text" name="surname" onChange={isEmptyInp1} />

      <button onClick={isValid}>click me!</button>
    </div>
  );
};

export default Task5;
