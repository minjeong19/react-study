import { useState } from "react";

export function useInput(initiaValue, submitAction) {
  const [inputValue, setInputValue] = useState(initiaValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmint = () => {
    setInputValue("");
    submitAction(inputValue);
  };

  return [inputValue, handleChange, handleSubmint];
}
