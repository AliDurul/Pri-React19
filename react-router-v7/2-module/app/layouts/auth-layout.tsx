import React from 'react'
import { Outlet } from 'react-router'

export default function AuthLayout() {
    return (
        <div className='flex flex-col items-center  min-h-screen gap-10'>
            <div className='flex flex-col items-center gap-4'>
                <h1>Lee Consultation</h1>
                <img src='https://picsum.photos/100/100' alt='Lee Consultation' className='rounded-lg shadow-lg' />
                <p>Lorem ipsum dolor sit amet consectet!</p>
            </div>
            <Outlet />
        </div>
    )
}
