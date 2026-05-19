import React, { useState, type ChangeEvent, type FormEvent } from "react";

interface ITodoFormProps {
  setTodos: (todo: string) => void;
}

export default function TodoForm({ setTodos }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);
  };

  return (
    <form className="my-4 flex" onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        className="flex-1 p-2 border rounded"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Add Todo
      </button>
    </form>
  );
}
