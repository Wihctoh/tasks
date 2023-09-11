// 1. Форма ввода с использованием useState и useEffect: Создайте компонент React,
// который содержит форму с полем ввода и кнопкой "Отправить". Используйте хук
// useState для хранения значения введенного текста и хук useEffect для
// отслеживания изменений этого значения. При каждом изменении значения в
// поле ввода, выводить его в консоль с помощью useEffect.

import { useState, useEffect } from "react";

const Task21 = () => {
  const [inpValue, setInpValue] = useState("");

  const inp = (e) => {
    setInpValue(e.target.value);
  };

  useEffect(() => {
    console.log(inpValue);
  }, [inpValue]);

  return (
    <div>
      <input type="text" name="" id="" onChange={inp} />
    </div>
  );
};

export default Task21;
