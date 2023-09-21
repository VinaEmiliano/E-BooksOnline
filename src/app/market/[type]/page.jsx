"use client"
import React, { useContext, useEffect } from 'react'
import { notFound } from 'next/navigation'
import Modal from 'react-modal';
import Image from 'next/image';
import { allTheBooks } from './data'
import { ModalContext } from '@/app/context/ModalContext';
import ButtonProduct from '@/app/components/ButtonProduct';

const getData = (cat) => {
  const data = allTheBooks[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    /* marginRight: '30%', */
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(165 180 252)',
    width:'40%'
/*      height: 'max-content' */
  },
};


const TypePage = ({params}) => {
  const data = getData(params.type)
  const { modal, handleResetModal, selectedProduct} = useContext(ModalContext)

  useEffect(() => {
    Modal.setAppElement('#modalElement');
  }, []);
  
  return(
    <main id='modalElement' /* className='md:h-[calc(100vh-9rem)]' */>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center my-8 py-4 gap-y-10'>
        {data.map( item => (
          <ButtonProduct
            key={item.id}
            item={item}
          />
        ))}
      </div>
      <Modal
        isOpen={modal}
        style={customStyles}
        contentLabel="Specific product"
      >
        <div className='flex flex-col justify-center items-center gap-6 m-auto w-full'>
          <button
            onClick={handleResetModal}
            className='ml-auto bg-red-500 p-2 rounded-md text-white'
          >
            x
          </button>
          <p className='font-semibold text-2xl'>{selectedProduct.title}</p>
          <Image src={selectedProduct.img} height={200} width={200} alt='agregar el title' />
          <p className='m-auto w- md:w-1/2'>{selectedProduct.desc}</p>
        </div>
      </Modal>
    </main>
  )
}

export default TypePage