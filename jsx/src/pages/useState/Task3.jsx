// 3. По клику на кнопку собрать данные из input и проверить вводимую строку на
// почту

import React from "react";
import { useState } from "react";

const Task3 = () => {
  const [inpValue, setIValue] = useState();

  function setInpValue(e) {
    setIValue(e.target.value);
  }

  function isValid() {
    try {
      if (!/^\w+@\w+.[a-z]{3,}$/gm.test(inpValue))
        throw new Error("invalid email!");

      alert("valid email");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <input type="text" name="" id="" onChange={setInpValue} />
      <button onClick={isValid}>click me</button>
    </div>
  );
};

export default Task3;
