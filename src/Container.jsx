import { useState } from "react";

export function Container({ children, title }) {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    setCollapsed((t) => !t);
  };

  return (
    <div className="container">
      <div>
        <button onClick={handleToggle}>Toggle</button>
      </div>
      {collapsed && (
        <>
          <div className="container-title">{title}</div>
          <div className="container-content">{children}</div>
        </>
      )}
    </div>
  );
}
