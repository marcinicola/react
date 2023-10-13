export function UnControlledForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    /* SECONDO METODO */
    const formData = new FormData(e.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on" ? true : false,
    };
    console.log(data);
};
/* PRIMO METODO */
/*    const username = e.target.elements.namedItem("username").value;
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
