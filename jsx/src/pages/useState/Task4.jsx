// По клику на кнопку собрать данные из двух input (2 разных state). Сравнить
// значения 2 input

import React from "react";
import { useState } from "react";

const Task4 = () => {
  const [inpValue1, setValue1] = useState();
  const [inpValue2, setValue2] = useState();

  function equal() {
    try {
      if (inpValue1 !== inpValue2) throw new Error("inp values not match!");

      alert("inp values equaled!");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <input type="text" onChange={(e) => setValue1(e.target.value)} />
      <input type="text" onChange={(e) => setValue2(e.target.value)} />

      <button onClick={equal}>click me</button>
    </div>
  );
};

export default Task4;
