import { useState } from "react";

export function Counter({value, increment}) {
  const [counter, setCounter] = useState(value);

  function handleClick() {
    setCounter(counter + increment);
  }
  return (
    <>
      <h2>{counter}</h2>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
