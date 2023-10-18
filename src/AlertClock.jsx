import "./App.css";

export function AlertClock() {
  function handleButtonClick() {
    alert("Current time: " + new Date().toLocaleTimeString());
  }
  return (
    <div>
      <button onClick={handleButtonClick}>Click</button>
    </div>
  );
}
