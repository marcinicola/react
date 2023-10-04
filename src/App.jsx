import { useState } from 'react'
import './App.css'
import { Welcome } from './Welcome'

function App() {

  return (
    <>
      <Welcome/> 
      {/* Se togliamo la props name non viene renderizzato il nome ma solamente Welcome! */}
      {/* Se aggiungo name= "Nicola" a <Welcome/> sovrascrive la props della funzione e mi renderizza in pagina Welcome, Nicola altrimenti, Welcome,Nome Mancante */}
    </>
  )
}

export default App
