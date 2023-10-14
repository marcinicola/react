import { useEffect, useRef, useState } from "react";

export function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);
  const _prevRef = useRef(initialValue);
  const directionRef = useRef("");

  useEffect(() => {
    let newDirection;
    if (counter > _prevRef.current) {
      newDirection = "up";
    } else if (counter < _prevRef.current) {
      newDirection = "down";
    } else {
      newDirection = "";
    }

    if (newDirection !== directionRef.current) {
      directionRef.current = newDirection;
      console.log(directionRef.current);
    }
    _prevRef.current = counter;
  }, [counter]);

  function handleIncrementCounter() {
    setCounter((c) => c + 1);
  }
  function handleDecrementCounter() {
    setCounter((c) => c - 1);
  }
  function resetCounter() {
    setCounter((c) => initialValue);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={handleIncrementCounter}>ADD</button>
      <button onClick={handleDecrementCounter}>DOWN</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}
