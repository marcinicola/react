import { useEffect, useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
  }
  function handleDecrement() {
    setCounter(counter - 1);
  }
  function handleReset() {
    setCounter(0);
  }
  return (
    <>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
