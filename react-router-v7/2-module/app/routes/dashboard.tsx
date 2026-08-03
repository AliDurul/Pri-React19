import React from 'react'
import { Link, Outlet, redirect } from 'react-router'

export default function SidebarLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 text-slate-100 p-5 shadow-lg">
        <div className="mb-8">
          <Link
            to="/"
            className=""
          >
            <h2 className="text-2xl font-bold">Home</h2>
          </Link>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard"
                className="block px-4 py-3 text-slate-100 rounded-md transition-colors hover:bg-slate-700"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/stats"
                className="block px-4 py-3 text-slate-100 rounded-md transition-colors hover:bg-slate-700"
              >
                Stats
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/blogs"
                className="block px-4 py-3 text-slate-100 rounded-md transition-colors hover:bg-slate-700"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/settings"
                className="block px-4 py-3 text-slate-100 rounded-md transition-colors hover:bg-slate-700"
              >
                Settings
              </Link>
            </li>

          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5">
        <Outlet />
      </main>
    </div>
  )
}

async function authMiddleware({ request, context }, next) {
  const userId = '' // dumy user data

  if (!userId) {
    throw redirect("/login");
  }

  return await next();
}


export const clientMiddleware = [authMiddleware];
export const middleware = [authMiddleware];