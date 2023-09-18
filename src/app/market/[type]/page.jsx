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
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(165 180 252)',
    width: '50%',
    height: '40%',
  },
};


const typePage = ({params}) => {
  const data = getData(params.type)
  const { modal, handleResetModal, selectedProduct} = useContext(ModalContext)

  useEffect(() => {
    Modal.setAppElement('#modalElement');
  }, []);
  
  return(
    <div id='modalElement'>
      <div className='grid grid-cols-2 justify-items-center my-8 py-4 gap-y-10'>
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
        <div>
          <button
            onClick={handleResetModal}
            className='bg-red-500 p-2 rounded-md text-white'
          >
            X
          </button>
          <p>{selectedProduct.title}</p>
          <Image src={selectedProduct.img} height={50} width={50} alt='agregar el title' />
          <p>{selectedProduct.desc}</p>
        </div>
      </Modal>
    </div>
  )
}

export default typePage