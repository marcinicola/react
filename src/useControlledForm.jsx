import { useState } from "react";

export const useControlledForm = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((g) => {
      return {
        ...g,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`email: ${input.username} password: ${input.password}`);
  };

  return { input, handleInputChange, handleSubmit };
};
