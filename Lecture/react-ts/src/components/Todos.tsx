import React, { useContext } from "react";
import TodoItem from "./TodoItem";

import { TodosContext } from "../store/TodosContext";

// 제네릭(FC)
// Todos의 타입을 지정
// React.FC = 함수형 컴포넌트로 동작한다는 걸 명확히 말함
// <> props 정의한 객체

//
// const Todos: React.FC<{
//   items: Todo[];
//   onDeleteTodo: (id: string) => void;
//   onUpdateTodo: (id: string, updateText: string) => void;
// }> = (props)

//
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul>
      {todosCtx.items.map((i) => (
        <TodoItem
          key={i.id}
          todoText={i.text}
          onDeleteTodo={todosCtx.deleteTodo.bind(null, i.id)}
          onUpdateTodo={todosCtx.updateTodo.bind(null, i.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
