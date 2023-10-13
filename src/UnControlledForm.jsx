export function UnControlledForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const remember = e.target.remember.checked;
    
    const data = {
      username,
      password,
      remember,
    };
    console.log(data);
  };

  /*
const username = e.target.elements.namedItem("username").value;
const password = e.target.elements.namedItem("password").value;
const remember = e.target.elements.namedItem("remember").checked;

const data = {
  username,
  password,
  remember,
}; */

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="checkbox" name="remember" />
      <button>Log-in</button>
      <button type="reset">Reset</button>
    </form>
  );
}
