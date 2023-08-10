// 2. По клику на кнопку собрать данные из input и проверить вводимую строку на
// палиндром

import React, { useState } from "react";

const Task2Us = () => {
  const [inpValue, setInpValue] = useState();

  function doInpValue(e) {
    setInpValue(e.target.value);
  }

  function isPalindrom() {
    try {
      if (inpValue !== inpValue.split("").reverse().join(""))
        throw new Error("no palindrom!");

      alert("is palindrom!");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <input type="text" name="" id="" onChange={doInpValue} />
      <button onClick={isPalindrom}>click me!</button>
    </div>
  );
};

export default Task2Us;
