import { Color } from "./Color";

export function Colors() {
  return (
    <ul>
      <Color
        items={[
          { id: 1, name: "Nero" },
          { id: 2, name: "Azzurro" },
          { id: 3, name: "Bianco" },
          { id: 4, name: "Giallo" },
          { id: 5, name: "Verde" },
        ]}
      />
    </ul>
  );
}
