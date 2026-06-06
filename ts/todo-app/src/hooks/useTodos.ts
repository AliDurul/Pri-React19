//     const fetchData = async () => {
//         const todos = await axios.get("https://6a247cb6420469ff067b18f6.mockapi.io/todos")
//         setTodos(todos.data)
// }

import axios from "axios";

const BASE_URL = "https://6a247cb6420469ff067b18f6.mockapi.io/todos"


const useTodosApi = () => {

    async function fetchTodos() {
        const todos = await axios.get(BASE_URL);
        return todos.data
    }


    return { fetchTodos }
}

export default useTodosApi;