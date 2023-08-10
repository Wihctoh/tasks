// 5. На входе статичный массив чисел и букв. Ваша задача отобразить на странице в
// случае числа четность и нечетность текущего значения в параграфе, в случае
// строки отобразить саму строку в параграфе

import React from "react";
const arr = [1, "qwe", 2, "zxc", 4];

const res = arr.map((el) => {
  if (isNaN(el)) {
    return <p>{el}</p>;
  } else {
    return el % 2 === 0 ? <p>chet</p> : <p>nechet</p>;
  }
});

const Task5 = () => {
  return <div>{res}</div>;
};

export default Task5;
