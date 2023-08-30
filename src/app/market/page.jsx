import { productType } from '../data'
import Image from 'next/image'
import Link from 'next/link'


const ProductSelector = () => {
  
  return (
    <main className='h-[calc(100vh-65px)]'>
      <div className='flex justify-around items-center text-center h-[50vh]'>
        {productType.map( type => (
          <Link
            href={`/market/${type.tag}`}
            value={type.value}
            key={type.value}
          >
            <h2>
              {type.title}
            </h2>
            <Image src={type.img} height={40} width={40} alt='product type image' />
            <p>
              {type.desc}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default ProductSelector