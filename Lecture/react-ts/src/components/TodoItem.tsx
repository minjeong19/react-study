import React from "react";

const TodoItem: React.FC<{ todoText: string }> = (props) => {
  return (
    <>
      <li>
        {props.todoText}
        <button>수정</button>
        <button>삭제</button>
      </li>
    </>
  );
};

export default TodoItem;

// Todo 객체 전체를 받는 방법
// <{todo: Todo => model에 있는 Todo}>
