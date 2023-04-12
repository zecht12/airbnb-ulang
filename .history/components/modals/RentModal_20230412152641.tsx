import React from 'react'
import Modal from './Modal'

const RentModal = () => {
    const rentModal = useRent
    return (
    <Modal isOpen={rentModal} title='ZechTravel always the best for you' />
    )
}

export default RentModal