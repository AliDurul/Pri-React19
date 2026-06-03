import { createContext, useContext, useState } from 'react';
import type { ITodo } from '../types/todos';


interface ITodoContext {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
    doneCount: number;
    count: number;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TodoContext = createContext<ITodoContext | null>(null);

export function TodoProvider({ children }: { children: React.ReactNode }) {
    const [todos, setTodos] = useState<ITodo[]>([{ id: 1, task: 'abc', isDone: false }]);
    const doneCount = todos.filter((t) => t.isDone).length;
    const count = todos.length;

    const values = { todos, setTodos, doneCount, count };

    return <TodoContext.Provider value={values}> {children} </TodoContext.Provider>
}


// eslint-disable-next-line react-refresh/only-export-components
export function useTodoContext() {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error("useTodoContext must be used within a TodoProvider");
    }

    return context;
}