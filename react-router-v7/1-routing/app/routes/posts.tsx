import React from 'react'
import { Link } from 'react-router'

const posts = [
    { id: 1, title: 'Post 1', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate hic reiciendis quo sapiente veritatis laborum libero! Aliquid totam consectetur officiis fuga impedit cum debitis ut deserunt molestiae iure repudiandae assumenda velit quasi ipsa iusto, praesentium laboriosam excepturi optio aliquam neque et vitae odio! Architecto beatae a harum rerum repudiandae?' },
    { id: 2, title: 'Post 2', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate hic reiciendis quo sapiente veritatis laborum libero! Aliquid totam consectetur officiis fuga impedit cum debitis ut deserunt molestiae iure repudiandae assumenda velit quasi ipsa iusto, praesentium laboriosam excepturi optio aliquam neque et vitae odio! Architecto beatae a harum rerum repudiandae?' },
    { id: 3, title: 'Post 3', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate hic reiciendis quo sapiente veritatis laborum libero! Aliquid totam consectetur officiis fuga impedit cum debitis ut deserunt molestiae iure repudiandae assumenda velit quasi ipsa iusto, praesentium laboriosam excepturi optio aliquam neque et vitae odio! Architecto beatae a harum rerum repudiandae?' },
]

export default function PostPage() {
  return (
    <div>
          <h1>Posts</h1>
        {posts.map(post => (
            <div key={post.id}>
                <Link to={`/posts/${post.id}`} className='underline underline-offset-2'>{post.title}</Link>
            </div>
        ))}
    </div>
  )
}
