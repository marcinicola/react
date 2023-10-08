export function MouseClicker() {
  function handleEvent(event) {
    console.log(event.target.name);
  }
  function handleEventImg(event) {
    console.log(event.currentTarget.src);
  }
  return (
    <button name="one" onClick={handleEvent}>
      <img src="#" onClick={handleEventImg} width={24} height={24} />
    </button>
  );
}
