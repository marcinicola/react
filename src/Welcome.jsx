import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome,{name}</p>
      {age > 18 && <Age age={27} />}
    </div>
  );
}
