import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <>
      <div>
        {name === "John" && <p>Welcome,{name}</p>}
        {age > 18 && age < 65 && <Age age={64} />}
      </div>
    </>
  );
}
