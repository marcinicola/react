export function UnControlledForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on" ? true : false,
    };
    console.log(data);
};

/*
VANTAGGI: Gestisce i dati di form piu' complessi e supportata da tutti i browser.
SVANTAGGI: Non supportato da browser più vecchi ed è più difficile eseguire il debug
*/
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
