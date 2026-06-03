import { useContext, useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { ITodo } from "./types/todos";

function App() {

  const [todoss, setTodoss] = useState<ITodo[]>([]);

  const doneCount = todoss.filter((t) => t.isDone).length;

  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">
        <Header count={todoss.length} doneCount={doneCount} />
        <TodoForm setTodos={setTodoss} />
        <TodoList todos={todoss} setTodos={setTodoss} />
      </div>
    </div>
  );
}

export default App;
