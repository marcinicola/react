import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="Nicola" />} />
      </Routes>
    </>
  );
}

export default App;
