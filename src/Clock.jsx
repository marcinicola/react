import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
  const [currentTime, SetCurrentTime] = useState("");
  const language = useContext(LanguageContext);
  const data = () => {
    const currentTime = new Date().toLocaleTimeString();
    return currentTime;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      SetCurrentTime(data());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {language === "it" ? <h2>Ora Corrente</h2> : <h2>Current Clock</h2>}
      <p>{currentTime}</p>
    </>
  );
}
