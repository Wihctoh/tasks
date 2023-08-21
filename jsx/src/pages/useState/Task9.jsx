import { useState } from "react";

const Task9 = () => {
  const [value, setValue] = useState(true);

  function showPost() {
    value ? setValue(false) : setValue(true);
  }

  return (
    <div>
      <button onClick={showPost}>{value ? "CLOSE" : "OPEN"}</button>
      {value ? (
        <div>
          <p>one</p>
          <p>two</p>
          <p>three</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Task9;
