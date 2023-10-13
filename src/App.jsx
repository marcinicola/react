import './App.css'
import { Login } from './Login'
import { UnControlledForm } from './UnControlledForm';

function App() {
 const onLogIn = (e,data) => {
   e.preventDefault()
   console.log(data);
}

  return (
    <>
     <Login onLogIn={onLogIn}/>
     <UnControlledForm />
    </>
  )
}

export default App
