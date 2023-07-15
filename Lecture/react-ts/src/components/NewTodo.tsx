import { useRef } from "react";

// 사용자에게 입력창 제공
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  // 기본값을 직접 설정하지 않아서 오류남
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // form 실행하면 자동으로 타입 전달
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    console.log(enteredText);

    // 공백을 제외하고 문자의 길이가 0 이면 경고
    if (enteredText.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;