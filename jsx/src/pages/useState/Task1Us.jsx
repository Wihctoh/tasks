// 1. При вводе данных в input отображать вводимое значение в параграф текущей страницы

import React from "react";
import { useState } from "react";

const Task1Us = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <p>{value}</p>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default Task1Us;
