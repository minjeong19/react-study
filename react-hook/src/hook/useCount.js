import { useCallback, useEffect, useState } from "react";

const UseCount = () => {
  const [count, setCount] = useState(0);

  const handleUp = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const handleDown = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  useEffect(() => {
    console.log("시작합니다");
  }, []);

  return { count, handleUp, handleDown };
};

export default UseCount;
