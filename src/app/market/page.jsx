import { productType } from '../data'
import Image from 'next/image'
import Link from 'next/link'


const ProductSelector = () => {
  
  return (
    <main className='h-screen'>
      <div className='flex flex-col h-4/5 justify-around items-center text-center'>
        <p className='md:text-xl'>
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
        <div className='flex justify-around w-full h-2/4'>
          {productType.map( type => (
            <Link
              href={`/market/${type.tag}`}
              value={type.value}
              key={type.value}
              className='flex flex-col justify-around items-center rounded-md w-1/3 bg-indigo-300 hover:text-white hover:bg-indigo-500 transition ease-in-out delay-100 duration-300'
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
      </div>
    </main>
  )
}

export default ProductSelector