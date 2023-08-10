// 3. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
// странице в тег li только те строки, которые содержат знак @

import React from "react";

const strArr = ["qwe@qwe", "qweqwe", "asasd", "asd@xzc"];

const Task3 = () => {
  return <div>{strArr.filter((el) => el.includes("@"))}</div>;
};

export default Task3;
