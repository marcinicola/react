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
    setTodo("");
  };

  const handleClickReset = () => {
    setItems([]);
  };

  const handleRemoveClick = (index) => {
    setItems(
      items.filter((i, el) => {
       return el !== index
      })
    );
  };

  return (
    <>
      <ul>
        {items.map((item,index) => {
          return (
            <li key={index}>
              {item}
              <button onClick={() => handleRemoveClick(index)}>REMOVE</button>
            </li>
          );
        })}
      </ul>
      <input value={todo} onChange={handleOnChange} type="text" />
      <button onClick={handleClickTodo}>ADD</button>
      <button onClick={handleClickReset}>RESET</button>
    </>
  );
}
