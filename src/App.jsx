import { useState } from "react";
import { GitHubUsers } from "./GithubUsers"
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  return (
    <>
      <GitHubUsers username={username} setUsername={setUsername} />
    </>
  );
}

export default App;

