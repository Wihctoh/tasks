import React from "react";
import { useState } from "react";

const Task6 = () => {
  const [value, setValue] = useState({
    name: "",
    surname: "",
    email: "",
    pwd: "",
  });
  function show(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  function show2() {
    console.log(value);
  }

  return (
    <div>
      {["name", "surname", "email", "pwd"].map((el, index) => (
        <input key={index} type="text" name={el} onChange={show} />
      ))}
      <button onClick={show2}>click me</button>
    </div>
  );
};

export default Task6;
