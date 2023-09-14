// 9. Форма с отправкой запроса к API с использованием useState: Создайте
// компонент, который предоставляет input, button. После ввода данных в input по
// нажатию кнопку необходимо отправлять асинхронный запрос к API
// https://yesno.wtf/api с получением рандомно сгенерированного “да/нет”.
// Отобразить результат в заголовок. Таким образом у вас получается игра в
// предсказателя: где пользователь вводит вопрос в input, а далее получает ответ на
// заданный вопрос.

import { useState } from "react";
import axios from "axios";

const Folder = () => {
  const [responseData, setResponseData] = useState("");
  const [value, setValue] = useState("");

  async function getAnswer() {
    const response = await axios.get("https://yesno.wtf/api");
    setResponseData(response.data.answer);
    setValue("");
  }

  return (
    <div>
      <h2>Enter your question!</h2>
      <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={getAnswer}>check!</button>
      <h1>{responseData}</h1>
    </div>
  );
};

export default Folder;
