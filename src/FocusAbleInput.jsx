import { useRef } from "react";
import { useEffect } from "react";

export function FocusAbleInput() {
  const _isMounted = useRef(false);

  useEffect(() => {
    if (!_isMounted.current) {
      console.log("Is Mounted")
      _isMounted.current= true
    }
  }, []);
  return <input type="text" />;
}
