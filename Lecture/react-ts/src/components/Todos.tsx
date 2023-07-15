import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
// 제네릭(FC)
// Todos의 타입을 지정
// React.FC = 함수형 컴포넌트로 동작한다는 걸 명확히 말함
// <> props 정의한 객체

//
const Todos: React.FC<{
  items: Todo[];
  onDeleteTodo: (id: string) => void;
  onUpdateTodo: (id: string, updateText: string) => void;
}> = (props) => {
  return (
    <ul>
      {props.items.map((i) => (
        <TodoItem
          key={i.id}
          todoText={i.text}
          onDeleteTodo={props.onDeleteTodo.bind(null, i.id)}
          onUpdateTodo={props.onUpdateTodo.bind(null, i.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
