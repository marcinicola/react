import { useState } from "react";
import { GitHubUser } from "./GitHubUser";

export const GitHubUsers = ({ username, setUsername }) => {
  const [data, setData] = useState([]);
  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((g) => {
      return [...g, username];
    });
    setUsername("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} type="text" value={username} />
        <button type="submit">Send</button>
      </form>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <GitHubUser username={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
