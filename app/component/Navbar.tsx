import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='w-full h-14 flex justify-center bg-amber-200'>
      <div className='w-1/2 h-full flex'>
        <Link className='flex-1 flex justify-center items-center bg-blue-500' href="/">Home</Link>
        <Link className='flex-1 flex justify-center items-center bg-gray-500' href="/about">About</Link>
        <Link className='flex-1 flex justify-center items-center bg-red-500' href="/contact">Contact</Link>
      </div>
    </div>
  )
}
