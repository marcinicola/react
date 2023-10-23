import { useState, useEffect } from "react";

export function Clock() {
  const [currentTime, setCurrentTime] = useState("");
  const getTime = () => setCurrentTime(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      getTime();
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
