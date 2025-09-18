import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='w-full h-14 flex justify-center mt-4'>
      <div className='w-1/2 h-full flex font-bold backdrop-blur-md rounded-3xl shadow-md'>
        <Link className='flex-1 flex justify-center items-center' href="/">Home</Link>
        <Link className='flex-1 flex justify-center items-center' href="/about">About</Link>
        <Link className='flex-1 flex justify-center items-center' href="/contact">Contact</Link>
      </div>
    </div>
  )
}
