import { useState } from "react";

const Task11 = () => {
  const [value, setValue] = useState({ test1: "", test2: "" });

  function takeValue(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  function show() {
    console.log(value);
  }

  return (
    <div>
      {["test1", "test2"].map((el, index) => (
        <input key={index} name={el} type="text" onChange={takeValue} />
      ))}

      <button onClick={show}>click me</button>
    </div>
  );
};

export default Task11;
