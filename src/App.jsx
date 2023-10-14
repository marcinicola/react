import "./App.css";
import { Colors } from "./Colors";

function App() {
  return (
    <>
      <Colors
        items={[
          { id: 1, name: "Nero" },
          { id: 2, name: "Azzurro" },
          { id: 3, name: "Bianco" },
          { id: 4, name: "Giallo" },
          { id: 5, name: "Verde" },
        ]}
      />
    </>
  );
}

export default App;
