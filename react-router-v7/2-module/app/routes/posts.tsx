import React from 'react'
import { Link } from 'react-router'
import type { Route } from './+types/posts';

const posts = [
  { id: 1, title: 'Post 1', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate hic reiciendis quo sapiente veritatis laborum libero! Aliquid totam consectetur officiis fuga impedit cum debitis ut deserunt molestiae iure repudiandae assumenda velit quasi ipsa iusto, praesentium laboriosam excepturi optio aliquam neque et vitae odio! Architecto beatae a harum rerum repudiandae?' },
  { id: 2, title: 'Post 2', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate hic reiciendis quo sapiente veritatis laborum libero! Aliquid totam consectetur officiis fuga impedit cum debitis ut deserunt molestiae iure repudiandae assumenda velit quasi ipsa iusto, praesentium laboriosam excepturi optio aliquam neque et vitae odio! Architecto beatae a harum rerum repudiandae?' },
  { id: 3, title: 'Post 3', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate hic reiciendis quo sapiente veritatis laborum libero! Aliquid totam consectetur officiis fuga impedit cum debitis ut deserunt molestiae iure repudiandae assumenda velit quasi ipsa iusto, praesentium laboriosam excepturi optio aliquam neque et vitae odio! Architecto beatae a harum rerum repudiandae?' },
]

export async function loader() {
  // return { message: "Hello, world!" };
  const res = await fetch('https://6a6e1a5beb8865c4bf4997eb.mockapi.io/posts');
  // console.log('Loader fetched data:', res);
  return res.json();
}

export default function PostPage({ loaderData, actionData, params, matches }: Route.ComponentProps) {
  // console.log('PostPage loaderData:', loaderData);
  
  return (
    <div>
      <h1>Posts</h1>
      {loaderData?.map((post: any) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`} className='underline underline-offset-2'>{post.name}</Link>
        </div>
      ))}
    </div>
  )
}
