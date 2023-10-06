import { AlertClock } from './AlertClock'
import './App.css'

function App() {
  function handleButtonClick() {
    alert('Current time: ' + new Date().toLocaleTimeString())
    }

  return (
    <>
     <AlertClock event={handleButtonClick}/>
    </>
  )
}

export default App
