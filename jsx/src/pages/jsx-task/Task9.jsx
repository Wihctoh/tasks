// 4. У вас есть кнопка. После каждого нажатия менять ее цвет [‘red’, ‘white’, ‘blue’]
// рандомно

import React from "react";

const Task9 = () => {
  const colorArr = ["red", "white", "blue"];

  function switchColor(event) {
    const colorIndex = Math.round(Math.random() * colorArr.length);

    event.target.style.backgroundColor = colorArr[colorIndex];
  }

  return (
    <div>
      <button onClick={switchColor}>click me!</button>
    </div>
  );
};

export default Task9;
