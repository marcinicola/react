import { Age } from "./Age";

export function Welcome({ name }) {
  return (
    <div>
      <p>Welcome,{name}</p>
      <Age/>
    </div>
  );
}
