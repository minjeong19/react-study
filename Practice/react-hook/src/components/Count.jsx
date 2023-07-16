import React, { useEffect, useState } from "react";
import UseCount from "../hook/useCount";

// hook 사용방법에 대해서 알려주기 위한 예시
export default function Count() {
  //   const [count, setCount] = useState(0);

  //   const handleUp = () => {
  //     setCount((count) => count + 1);
  //   };

  //   const handleDown = () => {
  //     setCount((count) => count - 1);
  //   };

  //   useEffect(() => {
  //     console.log(`You Clicked ${count} times`);
  //   });
  const { count, handleUp, handleDown } = UseCount();

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={handleUp}>1올라가요</button>
      <button onClick={handleDown}>1내려가요</button>
    </div>
  );
}
