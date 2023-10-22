import { useCallback, useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = () => {
    setCounter((c) => c + 1);
  };

  const handleDecrement = () => {
    setCounter((c) => c - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return { counter, handleIncrement, handleDecrement, handleReset };
};
