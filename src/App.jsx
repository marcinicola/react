import { Clock } from "./Clock";
/* import { LanguageContext } from "./LanguageContext"; */
import { useState } from "react";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("it");
  const handleSetLangueage = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <div>
      <select value={language} onChange={handleSetLangueage}>
        <option value="it"> Italiano </option>
        <option value="en"> English </option>
      </select>

      {/*  rimuovendo <LanguageContext.Provider> dal codice, 
      il componente <Clock> non avrà più accesso al value language. */}

      <Clock />
    </div>
  );
}

export default App;
