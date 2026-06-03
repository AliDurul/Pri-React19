import React, { useState, type ChangeEvent } from "react";
import type { ITodo } from "../types/todos";

interface ITodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export default function TodoForm({ setTodos }: ITodoFormProps) {
  const [task, setTask] = useState("");
  

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: ITodo = {
      id: Date.now(),
      task: task,
      isDone: false,
    };
    setTodos((oncekiTodolar) => [newTask, ...oncekiTodolar]);
    setTask("");
  };

  return (
    <form className="flex gap-2 mb-6" onSubmit={handleSubmit}>
      <label htmlFor="todo-input" className="sr-only">
        New task
      </label>
      <input
        id="todo-input"
        type="text"
        name="todo"
        value={task}
        required
        placeholder="What needs to be done?"
        className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-shadow"
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
        </svg>
        Add
      </button>
    </form>
  );
}
