import React from "react";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <Todos items={["타입스크립트", "신기하네요"]} />
    </div>
  );
}

export default App;
