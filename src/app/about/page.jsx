import React from 'react'
import { aboutData } from '../data'
import AboutPresentation from '../components/AboutPresentation'
import AboutFarewell from '../components/AboutFarewell'

const aboutPage = () => {
  return (
    <main className='landscape:h-[54rem] md:h-[calc(100vh-6rem)] lg:landscape:h-[51rem]'>
      <div className='flex flex-col gap-4 mt-4 mb-6'>
        <h1 className='text-xl md:text-2xl'>Welcome to <span className='font-bold text-orange-600'>E-Books-Online !!</span></h1>
        <h2 className=' text-lg md:text-xl'>Your favorite online bookstore!</h2>
        <article>
          <div>
            <AboutPresentation/>
          </div>
          <div>
            {aboutData.map(info => (
              <div className='mb-2 p-3 bg-orange-100 font-medium text-xs hover:text-white  hover:bg-orange-400 transition ease-in-out delay-100 duration-300' key={info.title}>
                <p className='mb-1'><span className='font-bold'>{info.title}</span></p>
                <p>{info.desc}</p>
              </div>
            ))}
          </div>
          <div>
            <AboutFarewell />
            <p className='text-end text-xl md:text-2xl'>
              <span className='font-bold text-orange-600'>Happy reading!</span>
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}

export default aboutPage