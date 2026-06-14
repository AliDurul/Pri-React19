import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodoContext } from "./context/TodoContext";

function App() {

  const { loading } = useTodoContext();

  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">
        <Header />
        <TodoForm />
        {loading ? <p>Loading...</p> : <TodoList />}
      </div>
    </div>
  );
}

export default App;
