import React from 'react'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div>
          <h1>looks like you are lost...</h1>
          <Link to="/" className='underline underline-offset-2'>Go Home</Link>
    </div>
  )
}
