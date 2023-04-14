'use client'
import React, { useMemo, useState } from 'react'
import Modal from './Modal'
import useRentModal from '@/app/hooks/useRentModal'
import Heading from '../Heading'
import { categories } from '../navbar/Categories'
import CategoryInput from '../inputs/CategoryInput'
import { FieldValues, useForm } from 'react-hook-form'

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

    const {register, handleSubmit, setValue, watch, formState:{ errors,}, reset} = useForm<FieldValues>({
        defaultValues: {
            category:'',
            location:null,
            guestCount: 1,
            roomCount
        },
    })

    let bodyContent = (
        <div className='flex flex-col gap-8'>
            <Heading title='Which one is the best?' subtitle='Pick a category' />
            <div className='grid grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto'>
                {categories.map((item) => (
                    <div key={item.label} className='grid grid-cols-24'>
                        <CategoryInput onClick={()=> {}} selected={false} label={item.label} icon={item.icon} />
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