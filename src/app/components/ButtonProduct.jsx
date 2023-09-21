'use client'
import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'
import Image from 'next/image'

const ButtonProduct = ({item}) => {
  
  const {handleModalProduct} = useContext(ModalContext)
  
  return (
    <button 
    id={item.id} 
    key={item.id}
    className='flex flex-col gap-2 justify-around items-center max-h-fit w-3/4 lg:w-2/4 p-2 rounded-md bg-indigo-300  hover:text-white hover:bg-indigo-500 transition ease-in-out delay-100 duration-300'
    onClick={() => handleModalProduct(item)}
    >
    <h1 className='font-semibold text-2xl'>{item.title}</h1>
    <Image src={item.img} height={300} width={300} alt='book cover' />
    <p className='text-lg'>{item.desc}</p>
  </button>
  )
}

export default ButtonProduct