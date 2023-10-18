import { Container } from "./Container.jsx";
import "./Container.css";

export function Welcome({ name, age }) {
  return (
    <Container>
      <p>Welcome,{name}</p>
      <p>Your age is {age}</p>
    </Container>
  );
}
