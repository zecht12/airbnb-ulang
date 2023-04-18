'use client'
import React, { useMemo, useState } from 'react'
import Modal from './Modal'
import useRentModal from '@/app/hooks/useRentModal'
import Heading from '../Heading'
import { categories } from '../navbar/Categories'

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
    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return 'Create'
        }
        return 'Next'
    }, [step]);
    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined
        }
    
        return 'Back'
    }, [step]);

    let bodyContent = (
        <div className='flex flex-col gap-8'>
            <Heading title='Which one is the best?' subtitle='Pick a category' />
            <div className='grid grid-cols-1 '>
                {categories.map((item) => (
                    <div key={item.label} className='grid grid-cols-2'>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    )

    return (
    <Modal isOpen={rentModal.isOpen} onClose={rentModal.onClose} body={bodyContent} onSubmit={rentModal.onClose} actionLabel={actionLabel} secondaryActionLabel={secondaryActionLabel} secondaryAction={step === STEPS.CATEGORY ? undefined: onBack} title='Travel with us' />
    )
}

export default RentModal