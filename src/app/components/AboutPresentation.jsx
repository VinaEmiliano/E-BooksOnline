'use client'
import React from 'react'
import Link from 'next/link'

const AboutPresentation = () => {
  return (
    <p className=' w-5/6 md:w-11/12 lg:w-2/3 m-auto mb-4 text-center  md:text-2xl'>
    At E-books-Online, we're passionate about connecting book lovers with exciting stories, enriching knowledge, and imaginative worlds, 
    <Link href='/market' className='font-medium underline decoration-pink-500'>you must take a look to our market!!</Link>. 
    Since our foundation, we've been dedicated to building a community where books open doors to new adventures and learning. {''}
    <Link href='/contact' className='font-medium underline decoration-lime-500'>Join our community and stay updated on new releases!! </Link>
  </p>
  )
}

export default AboutPresentation