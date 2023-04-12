'use client'
import React, { useState } from 'react'
import Modal from './Modal'
import useRentModal from '@/app/hooks/useRentModal'

enum STEPS {
    CATEGORY = 0,
    LOCATION =1,
    INFO =2,
    IMAGE=3,
    DESCRIPTION=4,
    PRICE=5
}

const RentModal = () => {
    const rentModal = useRentModal();
    const [step, setStep]= useState(STEPS.CATEGORY);
    const
    return (
    <Modal isOpen={rentModal.isOpen} onClose={rentModal.onClose} onSubmit={rentModal.onClose} actionLabel='Submit' title='ZechTravel always the best for you' />
    )
}

export default RentModal