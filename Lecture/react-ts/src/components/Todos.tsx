import React from "react";

// 제네릭(FC)
// Todos의 타입을 지정
// React.FC = 함수형 컴포넌트로 동작한다는 걸 명확히 말함
// <> props 정의한 객체
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
};

export default Todos;
