// 6. Форма с использованием useState: Создайте компонент текстового поля, который
// позволяет пользователю вводить текст и проверять введенный текст регулярным
// выражением на почту. В заголовок отобразить true если введенная строка
// удовлетворяет регулярному выражению и false в противном случае.
import { useState } from "react";

const Task19 = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  function emailValue(e) {
    setValue1(e.target.value);
  }

  function checkValue() {
    const res = /^\w+@[a-z]+.[a-z]{2,}$/gm.test(value1);

    res ? setValue2("true") : setValue2("false");
  }

  return (
    <div>
      <p>{value2}</p>
      <input type="text" onChange={emailValue} />
      <button onClick={checkValue}>check!</button>
    </div>
  );
};

export default Task19;
