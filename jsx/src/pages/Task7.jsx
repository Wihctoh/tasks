// 2. По событию изменения input отображать в консоль каждое вводимое значение

import React from "react";

const Task7 = () => {
  function show(event) {
    console.log(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={show} />
    </div>
  );
};

export default Task7;
