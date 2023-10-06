import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }
  return (
    <>
      <h2>{counter}</h2>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
