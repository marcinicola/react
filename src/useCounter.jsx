import { useCallback, useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCounter((c) => c - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return { counter, handleIncrement, handleDecrement, handleReset };
};
