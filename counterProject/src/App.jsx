import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 0;

  // const addValue = () => {
  //   console.log(counter)
  //   counter = counter + 1
  // }
  const [count, setCount] = useState(0);

  // function addValue() {
  //   setCount((c) => c + 1);
  // }
  // function decValue() {
  //   setCount((c) => c - 1);
  // }

  // useEffect(function () {
  //   addValue();
  // }, []);

  // const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCount(count + 1);
  };
  const decValue = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value = {count}</h2> 

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decValue}>Decrease Value</button>
    </>
  );
}

export default App;
