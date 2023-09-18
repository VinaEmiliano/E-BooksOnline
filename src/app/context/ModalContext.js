'use client'
import { createContext, useState } from "react"

export const ModalContext = createContext()

export const ModalProvider = ({children}) => {
  
  const [modal, setModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})

  const handleResetModal = () =>{
    setModal(!modal)
    setSelectedProduct({})
  }

  const handleModalProduct = (book) => {
    setSelectedProduct(book)
    setModal(!modal)
  }
  
  return(
    <ModalContext.Provider value={{modal, handleResetModal, selectedProduct, setSelectedProduct, handleModalProduct}}>
      {children}
    </ModalContext.Provider>
  )
}