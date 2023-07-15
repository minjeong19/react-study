import React, { useState } from "react";
import Todo from "../models/todo";

// Type alias
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
  updateTodo: (id: string, text: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  // const todos = [new Todo("리액트 배우기"), new Todo("타입스크립트 배우기")];
  // never : 배열이 언제나 비어있어야 한다는 의미
  const [todos, setTodos] = useState<Todo[]>([]);

  // 추가히기
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  // 삭제하기
  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  // 수정하기
  const updateTodoHandler = (todoId: string, updateText: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, text: updateText };
        }
        return todo;
      });
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
    updateTodo: updateTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
