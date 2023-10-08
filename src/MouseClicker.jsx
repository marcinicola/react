export function MouseClicker() {
  function handleEvent(event) {
    console.log(event.currentTarget.name);

  }
  return (
    <button name="one" onClick={handleEvent}>
      <img width={24} height={24} />
      Click Me!
    </button>
  );
}
