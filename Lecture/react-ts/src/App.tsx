import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  // const todos = [new Todo("리액트 배우기"), new Todo("타입스크립트 배우기")];
  // never : 배열이 언제나 비어있어야 한다는 의미
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
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

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos
        items={todos}
        onDeleteTodo={deleteTodoHandler}
        onUpdateTodo={updateTodoHandler}
      />
    </div>
  );
}

export default App;
