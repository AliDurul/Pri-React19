import React, { useState, type ChangeEvent } from "react";
import type { ITodo } from "../types/todos";

interface ITodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

export default function TodoForm({ setTodos }: ITodoFormProps) {
  const [task, setTask] = useState("");

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();


    // if (!task.trim())  {
    //   alert("Please enter a task");
    //   return;
    // }

    const newTask: ITodo = {
      id: Date.now(),
      task: task,
      isDone: false,
    }
    setTodos((oncekiTodolar) => [newTask, ...oncekiTodolar]);
    setTask("");
  };

  return (
    <form className="my-4 flex" onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={task}
        required
        className="flex-1 p-2 border rounded"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Add Todo
      </button>
    </form>
  );
}
