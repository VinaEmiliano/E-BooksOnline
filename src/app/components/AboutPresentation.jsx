'use client'
import React from 'react'
import Link from 'next/link'

const AboutPresentation = () => {
  return (
    <p className=' w-5/6 md:w-11/12 lg:w-2/3 m-auto mb-4 text-center text-xs md:text-sm'>
      At E-books-Online, we&apos;re passionate about connecting book lovers with exciting stories, enriching knowledge, and imaginative worlds,{' '}
      <Link href='/market' className='px-1 rounded-md font-medium underline decoration-4 decoration-pink-500 hover:bg-pink-500 hover:no-underline transition ease-in-out delay-100 duration-300'>you must take a look to our market!!</Link>{' '} 
      Since our foundation, we&apos;ve been dedicated to building a community where books open doors to new adventures and learning.{' '}
      <Link href='/contact' className='px-1 rounded-md font-medium underline decoration-4 decoration-lime-500 hover:bg-lime-500 hover:no-underline transition ease-in-out delay-100 duration-300'>Join our community and stay updated on new releases!! </Link>
    </p>
  )
}

export default AboutPresentation