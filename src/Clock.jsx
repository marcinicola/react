import { useState, useEffect } from "react";
import "./Clock.scss"

export function Clock() {
  const [currentTime, SetCurrentTime] = useState("");
  const data = () => {
    const currentTime = new Date().toLocaleTimeString();
    return currentTime;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      SetCurrentTime(data());
    }, 1000)

        return() => {
            clearInterval(interval)
        }

  }, []);

  return (
    <>
        <h2>{currentTime}</h2>
    </>
  );
}
