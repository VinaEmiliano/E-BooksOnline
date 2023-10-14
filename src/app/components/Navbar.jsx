'use client'
import Link from 'next/link'
import React from 'react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Market', href: '/market'},
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

const Navbar = () => {
  return (
    <div className='flex items-center justify-around px-3 py-5 bg-indigo-300 h-9'>{navigation.map(nav => (
      <Link href={nav.href} key={nav.name} className='p-1 rounded-md hover:bg-indigo-500 hover:text-white transition ease-in-out delay-100 duration-300'>{nav.name}</Link>))}
    </div>
  )
}

export default Navbar