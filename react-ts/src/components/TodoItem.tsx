import React, { useState } from "react";
const TodoItem: React.FC<{
  todoText: string;
  // event: React.MouseEvent : onClick 함수에 사용해야함, 인수의 타입을 정의하는 건 선택 사항
  onDeleteTodo: () => void;
  onUpdateTodo: (updateText: string) => void;
}> = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [updateText, setUpdateText] = useState("");

  const updateTextHandler = () => {
    props.onUpdateTodo(updateText);
    setIsEdit(false);
  };

  const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateText(event.target.value);
  };

  const toggleEditHandler = () => {
    setIsEdit(!isEdit);
  };
  return (
    <>
      <li>
        {isEdit === true ? (
          <>
            <input
              type="text"
              value={updateText}
              onChange={textChangeHandler}
            />
            <button onClick={updateTextHandler}>완료</button>
          </>
        ) : (
          <>
            {props.todoText}
            <button onClick={toggleEditHandler}>수정</button>
          </>
        )}
        <button onClick={props.onDeleteTodo}>삭제</button>
      </li>
    </>
  );
};

export default TodoItem;

// Todo 객체 전체를 받는 방법
// <{todo: Todo => model에 있는 Todo}>
