import "./App.css";
import "./Container.css";
import { Age } from "./Age";
import { Welcome } from "./Welcome";
import { Container } from "./Container";

function App() {
  return (
    <Container title={<Welcome />}>
      <Age age={27} />
    </Container>
  );
}

export default App;
