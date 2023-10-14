import { productType } from '../data'
import Image from 'next/image'
import Link from 'next/link'


const ProductSelector = () => {
  
  return (
    <main className='landscape:h-[54rem] md:h-[calc(100vh-6rem)] lg:landscape:h-[calc(100vh-6rem)]'>
      <div className='flex flex-col gap-4 mt-4 mb-6'>
        <h1 className='text-xl md:text-2xl'>Explore our <span className='font-bold text-orange-600'>huge library !!</span></h1>
        <h2 className=' text-lg md:text-xl'>We update our stock every day !!</h2>
        <article className='text-center'>
          <p className='w-5/6 md:w-11/12 lg:w-2/3 m-auto mb-4 text-center md:text-sm'>
            In the 21st century, books are divided into two categories: digital and physical.{' '}
            <Link href='/market/virtualEbooks' className='px-2 rounded-md font-medium underline decoration-4 decoration-pink-500 hover:bg-pink-500 hover:no-underline transition ease-in-out delay-100 duration-300'>
              eBooks
            </Link>{' '}
            allow easy access on devices such as eReaders, tablets, and smartphones, while{' '} 
            <Link href='/market/physicalbooks' className='px-2 rounded-md font-medium underline decoration-4 decoration-lime-500 hover:bg-lime-500 hover:no-underline transition ease-in-out delay-100 duration-300'>
              physical books
            </Link>{' '}
            provide a sensory experience with their tangible pages and characteristic aroma.
          </p>
          <div className='flex flex-col justify-around items-center gap-8 mt-10 lg:flex-row '>
            {productType.map( type => (
              <Link
                href={`/market/${type.tag}`}
                value={type.value}
                key={type.value}
                className='flex flex-col gap-3 justify-around items-center rounded-md p-2 w-2/3 lg:w-1/3 bg-indigo-300 hover:text-white hover:bg-indigo-500 transition ease-in-out delay-100 duration-300'
              >
                <h2 className='font-medium text-xl'>
                  {type.title}
                </h2>
                <Image src={type.img} height={160} width={160} alt='product type image' />
                <p className='text-lg'>
                  {type.desc}
                </p>
              </Link>
            ))}
          </div>
        </article>
      </div>
    </main>
  )
}

export default ProductSelector