import React from 'react'
import Link from 'next/link'

const AboutFarewell = () => {
  return (
    <p className=' w-5/6 md:w-11/12 lg:w-2/3 m-auto mb-4 text-center text-xs  md:text-sm'>
      Thank you for visiting <Link href='/' className='px-1 rounded-md font-medium underline decoration-4 decoration-red-500 hover:bg-red-500 hover:no-underline transition ease-in-out delay-100 duration-300'>E-books-Online</Link>. 
      We hope you find inspiration, entertainment, and knowledge within our pages. If you have any questions or need assistance, feel free to{' '}  
      <Link href='/contact' className='px-1 rounded-md font-medium underline decoration-4 decoration-blue-500 hover:bg-blue-500 hover:no-underline transition ease-in-out delay-100 duration-300'>reach out to our customer support team.</Link>
    </p>
  )
}

export default AboutFarewell