class Todo {
  id: string;
  text: string;
  // 값이 할당되는 부분
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
