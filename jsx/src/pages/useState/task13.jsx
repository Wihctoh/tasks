import { useState } from "react";

const Task13 = () => {
  const [va1, setVal1] = useState("");

  return (
    <div>
      <p>{va1}</p>
      <button onClick={(e) => setVal1(e.target.textContent)}>about</button>
      <button onClick={(e) => setVal1(e.target.textContent)}>blog</button>
      <button onClick={(e) => setVal1(e.target.textContent)}>home</button>
    </div>
  );
};

export default Task13;
