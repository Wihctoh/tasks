import "./App.css";
import Task35 from "./pages/useState/Task35";
import myContext from "./context/context";

function App() {
  const obj = {
    lang1: "Hello",
    lang2: "Привет",
  };

  return (
    <>
      <myContext.Provider value={obj}>
        <Task35 />
      </myContext.Provider>
    </>
  );
}

export default App;
