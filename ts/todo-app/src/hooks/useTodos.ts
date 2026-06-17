import axios from "axios";
const BASE_URL = "https://6a247cb6420469ff067b18f6.mockapi.io/todos";

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Token 1234567890abcdef"
    },
});


const useTodosApi = () => {

    async function fetchTodos() {
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        const todos = await client.get('?sortBy=createdAt&order=asc');
        return todos.data
    }

    async function postTodo(task: string) {
        await client.post('', { task });
    }

    async function delTodo(id: number) {
        await client.delete(`/${id}`)
    }

    async function updateTodo(id: number, data: { task?: string, isDone?: boolean }) {
        await client.put(`/${id}`, data)
    }

    return { fetchTodos, postTodo, delTodo, updateTodo }
}

export default useTodosApi;