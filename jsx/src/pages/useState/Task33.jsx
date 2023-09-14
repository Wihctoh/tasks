// 4. Напишите программу, которая принимает строку от пользователя и выводит ее в
// обратном порядке. Используй хук useState для хранения строки и хук useMemo
// для кэширования результата.

import { useState, useMemo } from "react";

const Task33 = () => {
  const [value, setValue] = useState("");
  const [res, setRes] = useState("");

  function string() {
    const res = value.split("").reverse().join("");
    setRes(res);
  }

  useMemo(string, [value]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <h1>{res}</h1>
    </div>
  );
};

export default Task33;
