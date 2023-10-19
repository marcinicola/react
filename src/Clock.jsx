import { useState, useEffect } from "react";

export function Clock() {
  const [currentTime, SetCurrentTime] = useState("");
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
      <h2>Current Clock</h2>
      <p>{currentTime}</p>
    </>
  );
}
