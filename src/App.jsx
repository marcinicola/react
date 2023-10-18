import "./App.css";
import "./Container.css";
import { Welcome } from "./Welcome";
import { Container } from "./Container";

function App() {
  return (
    <Container>
      <Welcome name="Nicola" age={27} />
    </Container>
  );
}

export default App;
