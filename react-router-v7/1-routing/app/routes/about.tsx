import React from 'react'
import { Link } from 'react-router'

export default function About() {
    return (
        <div className="container mx-auto p-4 text-center">
            <h1>About Us</h1>
            <p>This is the about page content.</p>
            <Link to="/" className='underline underline-offset-2'>Go back to Home Page</Link>
        </div>
    )
}
