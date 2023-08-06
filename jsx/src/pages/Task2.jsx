// 2. На входе статичный массив чисел. Ваша задача найти корень каждого числа и
// отобразить на странице в виде h1

import React from "react";

const numArr = [1, 2, 3, 4, 5];

const Task2 = () => {
  return (
    <div>
      {numArr.map((el) => (
        <h1> {Math.round(Math.sqrt(el))}</h1>
      ))}
    </div>
  );
};

export default Task2;
