import './App.css'
import { Login } from './Login'

function App() {
 const onLogIn = (e,data) => {
   e.preventDefault()
   console.log(data);
}

  return (
    <>
     <Login onLogIn={onLogIn}/>
    </>
  )
}

export default App
