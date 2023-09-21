import Image from 'next/image'
import Link from 'next/link'
import { homePageData } from './data'

export default function Home() {
  return (
    <main className='md:h-[calc(100vh-8rem)]'>
      <div className='flex flex-col gap-4 mt-4 mb-6'>
        <h1 className='text-xl md:text-4xl'>Welcome to the <span className='font-bold text-orange-600'>most important page</span> of ebooks on the web !!</h1>
        <h2 className=' text-lg md:text-2xl'>Discover a new world</h2>
        <article>
          {homePageData.map( sec => 
            <Link href={sec.link} key={sec.title}>
              <div className='flex flex-col justify-around items-center rounded-md w-2/3 m-auto mb-5 p-3 bg-indigo-300 font-normal hover:text-white  hover:bg-indigo-500 transition ease-in-out delay-100 duration-300'>
                  <h3 className='mb-1 font-semibold'>
                    {sec.title}
                  </h3>
                  <p>
                    {sec.desc}
                  </p>
              </div>
            </Link>
          )}
        </article>
      </div>
    </main>
  )
}
