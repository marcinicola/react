export function Container({ children, title }) {
  return (
    <div className="container">
      <div className="container-title">{title}</div>
      <div className="container-content">{children}</div>
    </div>
  );
}
