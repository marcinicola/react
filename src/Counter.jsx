import { useCounter } from "./useCounter";

export const Counter = () => {
  const { counter, handleIncrement, handleDecrement, handleReset } = useCounter(0);
  return (
    <div>
      <h1>My Counter</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
