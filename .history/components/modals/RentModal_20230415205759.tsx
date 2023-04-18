'use client'
import React, { useMemo, useState } from 'react'
import Modal from './Modal'
import useRentModal from '@/app/hooks/useRentModal'
import Heading from '../Heading'
import { categories } from '../navbar/Categories'
import CategoryInput from '../inputs/CategoryInput'
import { FieldValues, useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'
import CountrySelect from '../inputs/CountrySelect'

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
            roomCount:1,
            bathroomCount:1,
            imageSrc:'',
            price:1,
            title:'',
            description:'',
        },
    })

    const location = watch('location');
    const category = watch('category');
    const guestCount = watch('guestCount');
    const roomCount = watch('roomCount');
    const bathroomCount = watch('bathroomCount');
    const imageSrc = watch('imageSrc');

    const Map = useMemo(() => dynamic(() => import('../Map'), { 
        ssr: false 
    }), [location]);

        const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        })
    }

    let bodyContent = (
        <div className='flex flex-col gap-8'>
            <Heading title='Which one is the best?' subtitle='Pick a category' />
            <div className='grid grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto'>
                {categories.map((item) => (
                    <div key={item.label} className='grid grid-cols-24'>
                        <CategoryInput onClick={(category) => setCustomValue('category', category)} selected={category === item.label} label={item.label} icon={item.icon} />
                    </div>
                ))}
            </div>
        </div>
    )

    if(step === STEPS.LOCATION){
        bodyContent =(
            <div className='flex flex-col gap-8'>
                <Heading title='Where is your place located?' subtitle='We will help you' />
                <CountrySelect onChange={(value) => setCustomValue('location', value)} />
                <Map />
            </div>
        )
    }

    return (
    <Modal isOpen={rentModal.isOpen} onClose={rentModal.onClose} body={bodyContent} onSubmit={onNext} actionLabel={actionLabel} secondaryActionLabel={secondaryActionLabel} secondaryAction={step === STEPS.CATEGORY ? undefined: onBack} title='Travel with us' />
    )
}

export default RentModal