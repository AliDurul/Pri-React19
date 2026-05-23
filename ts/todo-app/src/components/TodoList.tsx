import type { ITodo } from "../types/todos";

// interface ITodo {
//   id: number;
//   task: string;
//   isDone: boolean;
// }

// way 1
// export default function TodoList({ todos }: { todos: ITodo[] }) {

// way 2
interface ITodoListProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

export default function TodoList({ todos, setTodos }: ITodoListProps) {
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between p-2 border-b"
        >
          <span className={todo.isDone ? "line-through text-gray-500" : ""}>
            {todo.task}
          </span>
          <button
            className="text-red-500"
            onClick={()=> setTodos((prev)=> prev.filter(t => t.id !== todo.id ))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
