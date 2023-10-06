import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }
  return (
    <>
      {/* Usiamo la funzione con la callback con parametro (counter) se ci sono piu' operazioni da eseguire, 
      altrimenti il valore immediato come da esercizio */}
      <h2>{counter}</h2>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
