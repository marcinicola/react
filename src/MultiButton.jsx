export function MultiButton({btn1,btn2,btn3}) {
  function HandlEventButton(event) {
    console.log(event.target.name);
  }

  return (
    <>
      <button name="one" onClick={HandlEventButton}>{btn1}</button>
      <button name="two" onClick={HandlEventButton}>{btn2}</button>
      <button name="three" onClick={HandlEventButton}>{btn3}</button>
    </>
  );
}
