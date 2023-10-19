import { Clock } from "./Clock";
import { LanguageContext } from "./LanguageContext";
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
        <option value="it">Italiano</option>
        <option value="en">English</option>
      </select>
      <LanguageContext.Provider value={language}>
        <Clock />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
