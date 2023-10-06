import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }
  return (
    <>
      <CounterDisplay value={counter} />
      <button onClick={handleClick}>Click</button>
    </>
  );
}
