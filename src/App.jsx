import { useState } from "react";
import "./App.css";
import { Hello } from "./Hello";

function App() {
  function Message() {
    return <p>What a beautiful day!</p>;
  }

  return (
    <>
      <Hello />
      {Message()}
      {/* Si renderizza in pagina lo stesso */}
    </>
  );
}

export default App;
