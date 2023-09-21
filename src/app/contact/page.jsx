import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { contactData } from '../data'


const contactPage = () => {
  return (
    <main className='md:h-[calc(100vh-8rem)]'>
      <div>
        <div className='flex flex-col gap-4 mt-4 mb-6'>
          <h1 className='text-xl md:text-4xl'>Join our community through <span className='font-bold text-orange-600'>Social Media !!</span></h1>
          <h2 className=' text-lg md:text-2xl'>We want to know you !!</h2>
          <article>
            {contactData.map(contact => (
              <Link href={contact.link} key={contact.title}>
                <div className='mb-2 p-3 bg-orange-100 font-semibold hover:text-white  hover:bg-orange-400 transition ease-in-out delay-100 duration-300'>
                  <div>
                    <Image src={contact.logo} width={50} height={50} alt='logo social media' />
                  </div>
                  <div>
                    <h3 className='mb-1 font-bold'>
                      {contact.title}
                    </h3>
                    <p>
                      {contact.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </article>
        </div>
      </div>
    </main>
  )
}

export default contactPage