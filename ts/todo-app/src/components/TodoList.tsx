
// ── Inline SVG icons ──────────────────────────────────────────────────────────

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function ArrowUturnLeftIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
    </svg>
  );
}

function PencilSquareIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
  );
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function XMarkIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
import { useTodoContext } from "../context/TodoContext";


export default function TodoList() {
  const { todos, editingId, setEditingId, editValue, deleteTodo, setEditValue, saveEdit, toggleDone, startEditing } = useTodoContext();

  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-14 text-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-14 h-14 text-slate-300" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>
        <p className="text-sm font-medium">No tasks yet</p>
        <p className="text-xs">Add your first task above</p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-slate-100" role="list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center gap-3 py-3 px-2 rounded-xl hover:bg-slate-50 transition-colors group"
        >
          {editingId === todo.id ? (
            // ── Edit mode ──────────────────────────────────────────────────
            <>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.currentTarget.value)}
                className="flex-1 rounded-lg border border-indigo-300 bg-white px-3 py-1.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    saveEdit(todo.id)
                  }
                }}
              />
              <div className="flex items-center gap-1 shrink-0">
                <button
                  aria-label="Save changes"
                  className="p-2 rounded-lg text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1 transition-colors"
                  onClick={() => { saveEdit(todo.id) }}
                >
                  <CheckIcon className="w-4 h-4" />
                </button>
                <button
                  aria-label="Cancel editing"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-1 transition-colors"
                  onClick={() => setEditingId(null)}
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            // ── View mode ──────────────────────────────────────────────────
            <>
              <span
                className={`flex-1 text-sm ${todo.isDone
                  ? "line-through text-slate-400"
                  : "text-slate-800"
                  }`}
              >
                {todo.task}
              </span>
              <div className="flex items-center gap-1 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                {/* Done / Undo */}
                <button
                  aria-label={todo.isDone ? "Mark as not done" : "Mark as done"}
                  className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 ${todo.isDone
                    ? "text-emerald-500 hover:text-slate-400 hover:bg-slate-100 focus:ring-slate-300"
                    : "text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 focus:ring-emerald-300"
                    }`}
                  onClick={() => toggleDone(todo.id)}>
                  {todo.isDone ? (
                    <ArrowUturnLeftIcon className="w-4 h-4" />
                  ) : (
                    <CheckCircleIcon className="w-4 h-4" />
                  )}
                </button>

                {/* Edit */}
                <button
                  aria-label="Edit task"
                  className="p-2 rounded-lg text-slate-400 hover:text-blue-500 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1 transition-colors"
                  onClick={() => { startEditing(todo) }}
                >
                  <PencilSquareIcon className="w-4 h-4" />
                </button>

                {/* Delete */}
                <button
                  aria-label="Delete task"
                  className="p-2 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-1 transition-colors"
                  onClick={() => deleteTodo(todo.id)}>
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
