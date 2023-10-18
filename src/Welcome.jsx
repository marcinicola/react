import { Age } from "./Age";

export function Welcome({ name }) {
  return (
    <>
      <div>
        {name === "John" && <p>Welcome,{name}</p>}
        <Age age={64} />
      </div>
    </>
  );
}
