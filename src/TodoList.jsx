import { useState } from "react";
import classes from "./TodoList.module.scss";

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
        return el !== index;
      })
    );
  };

  return (
    <>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button
                className={classes.removeButton}
                onClick={() => handleRemoveClick(index)}
              >
                REMOVE
              </button>
            </li>
          );
        })}
      </ul>
      <div className={classes.toDoContainer}>
        <input
          className={classes.todoInput}
          value={todo}
          onChange={handleOnChange}
          type="text"
        />
        <div className={classes.buttonContainer}>
          <button className={classes.addButton} onClick={handleClickTodo}>
            ADD
          </button>
          <button className={classes.resetButton} onClick={handleClickReset}>
            <svg
              viewBox="0 0 16 16"
              class="bi bi-arrow-repeat"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
              <path
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                fill-rule="evenodd"
              ></path>
            </svg>
            RESET
          </button>
        </div>
      </div>
    </>
  );
}
