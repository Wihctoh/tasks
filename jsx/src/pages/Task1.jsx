// 1. На входе статичный массив чисел. Ваша задача каждое число массива возвести в
// квадрат и отобразить на странице

import React from "react";

const arr = [1, 2, 3, 4];

const Task1 = () => {
  return (
    <div>
      {arr.map((el) => (
        <p> {el ** 2}</p>
      ))}
    </div>
  );
};

export default Task1;
