import { useControlledForm } from "./useControlledForm";

export const ControlledForm = () => {
  const { input, handleInputChange, handleSubmit } = useControlledForm({
    username: "",
    password: "",
  });
  return (
    <>
      <h1>My Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={input.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleInputChange}
        />
        <button>Send</button>
      </form>
    </>
  );
};
