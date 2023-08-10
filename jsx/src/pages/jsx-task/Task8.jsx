// 3. По нажатию на enter в input onKeyDown выявлять является ли введенное слово
// палиндромом

import React from "react";

const Task8 = () => {
  function isPalindrom(event) {
    if (event.key !== "Enter") {
      return;
    }

    const inpValue = event.target.value.trim();

    if (inpValue.length < 2) {
      console.log("incorrent value!");
      return;
    }
    if (inpValue === inpValue.split("").reverse().join("")) {
      console.log("is palindrom!");
    } else console.log("not palindrom!");
  }

  return (
    <div>
      <input type="text" onKeyDown={isPalindrom} />
    </div>
  );
};

export default Task8;
