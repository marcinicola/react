export function MouseClicker(){
    function handleEvent(event){
            console.log(event.target.name);
    }
    return(
        <button name="one" onClick={handleEvent}>Click Me!</button>
    )
}