'use client'
import React, { useMemo, useState } from 'react'
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
    const onBack = () => {
        setStep((value) => value -1)
    }
    const onNext = () => {
        setStep((value) => value +1)
    }
    const actionLabel = useMemo(() =>{
        
    }, [])

    return (
    <Modal isOpen={rentModal.isOpen} onClose={rentModal.onClose} onSubmit={rentModal.onClose} actionLabel='Submit' title='ZechTravel always the best for you' />
    )
}

export default RentModal