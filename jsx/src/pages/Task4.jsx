// 4. На входе статичный массив строк. Ваша задача отобразить на странице все строки
// массива, а также картинку. Каждая итерация будет возвращать
// <div>
// <p>el</p>
// <img/>
// </div>

import React from "react";
import gif from "./assets/1.png";

const arr = ["qwe", "asd", "zxc"];

const Task4 = () => {
  return (
    <div>
      <div>
        {arr.map((el) => (
          <div>
            <p>{el}</p>
            <img src={gif} alt="" width={50} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task4;
