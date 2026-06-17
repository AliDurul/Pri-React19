import { createContext, useContext, useEffect, useState, type ChangeEvent } from 'react';
import type { ITodo } from '../types/todos';
import useTodosApi from '../hooks/useTodos';


interface ITodoContext {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
    doneCount: number;
    count: number;
    taskInput: string;
    setTaskInput: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
    editingId: number | null;
    setEditingId: React.Dispatch<React.SetStateAction<number | null>>;
    editValue: string;
    setEditValue: React.Dispatch<React.SetStateAction<string>>;
    saveEdit: (id: number) => void;
    toggleDone: (id: number) => void;
    startEditing: (todo: ITodo) => void;
    deleteTodo: (id: number) => void;
    loading: boolean;
}

export const TodoContext = createContext<ITodoContext | null>(null);

export function TodoProvider({ children }: { children: React.ReactNode }) {

    const { fetchTodos, postTodo, delTodo, updateTodo } = useTodosApi();

    const [todos, setTodos] = useState<ITodo[]>([]);
    const [taskInput, setTaskInput] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editValue, setEditValue] = useState("");
    const [loading, setLoading] = useState(false);

    const doneCount = todos.filter((t) => t.isDone).length;
    const count = todos.length;

    const refreshData = async () => {
        const todosArr = await fetchTodos()
        setTodos(todosArr);
        setLoading(false);
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        
        const task = taskInput.trim();
        setTaskInput("");

        await postTodo(task);

        const todos = await fetchTodos()
        setTodos(todos);
        setLoading(false);

    };

    const saveEdit = async (id: number) => {
        setLoading(true);

        await updateTodo(id, { task: editValue });
        setEditingId(null);

        refreshData();
    }

    const toggleDone = async (id: number) => {

        setLoading(true);

        const todo = todos.find((t) => t.id === id);
        await updateTodo(id, { isDone: !todo?.isDone })

        refreshData();

    }

    const startEditing = (todo: ITodo) => {
        setEditingId(todo.id);
        setEditValue(todo.task);
    }

    const deleteTodo = async (id: number) => {
        setLoading(true);
        await delTodo(id)

        refreshData();
    }

    useEffect(() => {
        setLoading(true)
        fetchTodos()
            .then((todos) => {
                setTodos(todos);
                setLoading(false);
            });
    }, []);

    const values = {
        todos,
        setTodos,
        doneCount,
        count,
        taskInput,
        setTaskInput,
        handleSubmit,
        editingId,
        setEditingId,
        editValue,
        setEditValue,
        saveEdit,
        toggleDone,
        startEditing,
        deleteTodo,
        loading
    };

    return <TodoContext.Provider value={values}> {children} </TodoContext.Provider>
}

export function useTodoContext() {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error("useTodoContext must be used within a TodoProvider");
    }

    return context;
}