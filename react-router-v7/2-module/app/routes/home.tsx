import { Link, redirect } from "react-router";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}



export default function Home() {

  return (
    <div className="container mx-auto p-4 text-center">
      <h1>Welcome to My Route with Props!</h1>
      <div className="flex flex-col gap-4 mt-4">
        <Link to="/about" className='underline underline-offset-2'>Go to About Page</Link>
        <Link to="/login" className='underline underline-offset-2'>Go to Login Page</Link>
        <Link to="/register" className='underline underline-offset-2'>Go to Register Page</Link>
        <Link to="/dashboard" className='underline underline-offset-2'>Go to Dashboard</Link>
        <Link to="/dashboard/stats" className='underline underline-offset-2'>Go to Dashboard stats</Link>
        <Link to="/posts" className='underline underline-offset-2'>Go to posts</Link>
      </div>
    </div>
  );
}


