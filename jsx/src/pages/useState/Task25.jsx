// 3. Запрос к API с использованием useState и useEffect: Создайте компонент, который
// выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные
// данные в заголовок с использованием useEffect.

import { useState, useEffect } from "react";
import axios from "axios";

const Task25 = () => {
  const [response, setResponse] = useState([]);

  const request = async () => {
    const response = await axios.get("https://api.ipify.org/?format=json");
    setResponse(response.data.ip);
  };

  useEffect(() => {
    request();
  }, []);

  return <div>{response}</div>;
};

export default Task25;
