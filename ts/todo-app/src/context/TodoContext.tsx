import { createContext, useState } from 'react';
import type { ITodo } from '../types/todos';


interface ITodoContext {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TodoContext = createContext<ITodoContext | undefined>(undefined);

export function TodoProvider({ children }: { children: React.ReactNode }) {
    const [todos, setTodos] = useState<ITodo[]>([{id: 1, task: 'abc', isDone: false}]);

    return <TodoContext.Provider value={{todos, setTodos}}> {children} </TodoContext.Provider>
}