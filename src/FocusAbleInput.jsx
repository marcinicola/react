import { useRef } from "react";
import { useEffect } from "react";

export function FocusAbleInput() {
  const _inputRef = useRef(null);

  useEffect(() => {
    _inputRef.current?.focus();
  }, []);
  return <input ref={_inputRef} type="text" />;
}
