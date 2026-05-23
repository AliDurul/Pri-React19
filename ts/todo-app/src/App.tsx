import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { ITodo } from "./types/todos";

// interface ITodo {
//   id: number;
//   task: string;
//   isDone: boolean;
// }

function App() {
  // const [todos, setTodos] = useState([] as ITodo[]);
  // const [todos, setTodos] = useState<Array<ITodo>>([]);

  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <div className="container mx-auto p-4">
      <Header />
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
