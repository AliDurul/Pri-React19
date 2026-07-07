import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  // return { message: "Hello, world!" };
  const res = await fetch('https://6a4ceed6e1cf82a4a17dd05e.mockapi.io/posts');
  return res.json();
}
    

export default function Home({ loaderData, actionData, params, matches }: Route.ComponentProps) {

  return (
    <div className="container mx-auto p-4 text-center">
      <h1>Welcome to My Route with Props!</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <br/>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>
      <div className="flex flex-col gap-4 mt-4">
        <Link to="/about" className='underline underline-offset-2'>Go to About Page</Link>
        <Link to="/login" className='underline underline-offset-2'>Go to Login Page</Link>
        <Link to="/register" className='underline underline-offset-2'>Go to Register Page</Link>
      </div>
    </div>
  );
}
