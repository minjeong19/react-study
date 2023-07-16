import React, { useRef, useState } from "react";

export default function UseRef2() {
  const [text, setText] = useState("");

  const colorRef = useRef();

  const colorBtn = (e) => {
    e.preventDefault();
    colorRef.current.style.backgroundColor = text;
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form ref={colorRef}>
        <input type={text} onChange={handleChange} />
        <br />
        <button onClick={colorBtn}>색깔이 변해요 </button>
      </form>
    </div>
  );
}
