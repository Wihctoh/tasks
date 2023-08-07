// 1. На входе 2 статичные переменные пароля. По клику на кнопку необходимо
// реализовать метод валидации. Написать регулярное выражение: пароль от 8
// символов, содержит числа, буквы, !@#$%^&*+=

import React from "react";

const Task6 = () => {
  const pwd1 = "1qwe1qwe1qwe@";
  const pwd2 = "1qwe1qwe1qwe@";

  function isValid() {
    if (pwd1.length < 8) {
      console.log("pwd length is short!");
      return;
    }
    if (!/[\w]+[!@#$%^&*+=]/gm.test(pwd1)) {
      console.log("incorrect pwd!");
      return;
    }
    if (pwd1 !== pwd2) {
      console.log("password mismatch!");
      return;
    }
    console.log(true);
  }

  return (
    <div>
      <button onClick={isValid}>click me!</button>
    </div>
  );
};

export default Task6;
