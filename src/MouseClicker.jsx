export function MouseClicker() {
  function handleEvent(event) {
    console.log(event.target);

  }
  return (
    
    /* Perche' Quando fai clic sull'immagine, 
    l'evento si scatena anche al pulsante genitore, 
    quindi entrambi gli eventi vengono eseguiti. */

    <button name="oneButton" onClick={handleEvent}>
      <img name="img" onClick={handleEvent} width={24} height={24} />
      Click Me!
    </button>
  );
}
