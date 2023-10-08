export function MouseClicker(){
    function handleEvent(event){
            console.log(event.target.name);
    }
    return(
        <button name="oneButton" onClick={handleEvent}>Click Me!</button>
    )
}