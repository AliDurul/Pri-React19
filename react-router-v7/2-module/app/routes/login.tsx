import React from 'react'

export default function Login() {
  return (
    <form className='flex flex-col gap-4 w-full max-w-md mx-auto'>
      <input className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" placeholder="Email" />
      <input className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' type="password" placeholder="Password" />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md' type="submit">Login</button>
    </form>
  )
}
