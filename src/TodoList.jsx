import { useState } from "react";

export function TodoList() {
  const [items, setItems] = useState([]);
  const [todo, setTodo] = useState("");

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClickTodo = () => {
    setItems((items) => {
      return [...items, todo];
    });
  };

  return (
    <>
      <ul>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <input value={todo} onChange={handleOnChange} type="text" />
      <button onClick={handleClickTodo}></button>
    </>
  );
}
