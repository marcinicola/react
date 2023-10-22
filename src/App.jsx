import "./App.css";
import FilteredList from "./FilteredList";

function App() {
  return (
    <>
      <FilteredList
        list={[
          {
            name: "Nicola",
            id: 96,
            age: 27,
          },
          {
            name: "Denis",
            id: 28,
            age: 21,
          },
          {
            name: "Andrea",
            id: 1,
            age: 16,
          },
        ]}
      />
    </>
  );
}

export default App;
