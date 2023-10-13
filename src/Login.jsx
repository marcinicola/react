import { useState } from "react";

export function Login({ onLogIn }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleEventInput = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const handleEventReset = () => {
    setData({
      username: "",
      password: "",
      remember: false,
    });
  };

  const isDisabled = data.username === "" || data.password === ""

  return (
    <>
      <form onSubmit={(e)=>onLogIn(e,data)}>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleEventInput}
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleEventInput}
        />
        <input
          type="checkbox"
          name="remember"
          checked={data.remember}
          onChange={handleEventInput}
        />
        <button disabled ={isDisabled}>Log-In</button>
        <button onClick={handleEventReset}>Reset</button>
      </form>
    </>
  );
}
