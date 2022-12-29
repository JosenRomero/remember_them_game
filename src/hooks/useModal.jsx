import { useState } from 'react';

export const useModal = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true)
  
  const closeModal = () => setIsOpenModal(false)

  return {
    isOpenModal,
    openModal,
    closeModal
  }

}
