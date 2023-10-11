import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
  const [name, setName] = useState("");

  const handleEventInput = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <form>
        <input value={name} onChange={handleEventInput} />
      </form>
      <Welcome name={name}/>
    </>
  );
}
