//     const fetchData = async () => {
//         const todos = await axios.get("https://6a247cb6420469ff067b18f6.mockapi.io/todos")
//         setTodos(todos.data)
// }

import axios from "axios";
const BASE_URL = "https://6a247cb6420469ff067b18f6.mockapi.io/todos"


const useTodosApi = () => {


    async function fetchTodos() {
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        const todos = await axios.get(`${BASE_URL}?sortBy=createdAt&order=asc`);
        return todos.data
    }

    async function postTodo(task: string) {
        await axios.post(BASE_URL, { task });
    }

    async function delTodo(id: number) {
        await axios.delete(`${BASE_URL}/${id}`)
    }

    return { fetchTodos, postTodo, delTodo }
}

export default useTodosApi;