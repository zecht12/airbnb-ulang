import React from 'react'
import Modal from './Modal'
import useRentModal from '@/app/hooks/useRentModal'

const RentModal = () => {
    const rentModal = useRentModal();
    return (
    <Modal isOpen={rentModal} onClose={rentModal.onClose} on title='ZechTravel always the best for you' />
    )
}

export default RentModal