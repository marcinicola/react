export function MouseClicker() {
  function handleEvent(event) {
    console.log(event.currentTarget.name);

  }
  function handleEventImg(event) {
    console.log(event.currentTarget.src);

  }
  return (

    /* Perche' Quando fai clic sull'immagine, 
    l'evento si scatena anche al pulsante genitore, 
    quindi entrambi gli eventi vengono eseguiti. */

    <button name="one" onClick={handleEvent}>
      <img src="#" onClick={handleEventImg} width={24} height={24} />
      Click Me!
    </button>
  );
}
