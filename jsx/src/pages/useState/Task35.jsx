// 1. Создайте простое приложение для аутентификации пользователя. Используйте
// useContext, чтобы хранить информацию о текущем пользователе.
// 2. Разработайте приложение, в котором пользователь может выбирать язык
// интерфейса (например, английский и испанский). Используйте useContext, чтобы
// хранить текущий выбранный язык и переводить текст на выбранный язык в
// компонентах.
// 3. Создайте приложение, которое отображает информацию о текущей роли
// пользователя (например, "Администратор" или "Пользователь"). Используйте
// useContext, чтобы хранить текущую роль и отображать ее на экране.

import { useContext, useState } from "react";
import myContext from "../../context/context";

const Task35 = () => {
  const [text, setText] = useState("");
  const { lang1, lang2 } = useContext(myContext);

  function changeLang1() {
    setText(lang1);
  }
  function changeLang2() {
    setText(lang2);
  }

  return (
    <div>
      <button onClick={changeLang1}>EN</button>
      <button onClick={changeLang2}>RUS</button>

      <p>{text}</p>
    </div>
  );
};

export default Task35;
