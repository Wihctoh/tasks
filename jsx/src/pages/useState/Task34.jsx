// 5. Реализуйте компонент, который отображает IP-адрес пользователя. IP-адрес
// должен быть получен с использованием useMemo при монтировании
// компонента и кэширован для избегания повторных запросов к API при
// обновлении других частей компонента. https://api.ipify.org/?format=json

import { useState, useMemo } from "react";
import axios from "axios";

const Task34 = () => {
  const [ip, setIp] = useState("");

  async function getIp() {
    const res = await axios.get("https://api.ipify.org/?format=json");
    setIp(res.data.ip);
  }

  useMemo(getIp, []);

  return (
    <div>
      <h1>{ip}</h1>
    </div>
  );
};

export default Task34;
