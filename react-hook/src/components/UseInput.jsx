import React from "react";
import { useInput } from "../hook/useInput";

const displayMessage = (message) => {
  alert(message);
};

export default function UseInput() {
  const [inputValue, handleChange, handleSubmint] = useInput(
    "",
    displayMessage
  );

  return (
    <div>
      <h1>UseInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmint}>확인</button>
    </div>
  );
}
