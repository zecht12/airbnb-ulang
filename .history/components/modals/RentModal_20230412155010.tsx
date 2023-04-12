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
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.PRICE) {
          return onNext();
        }
        
        setIsLoading(true);
    
        axios.post('/api/listings', data)
        .then(() => {
          toast.success('Listing created!');
          router.refresh();
          reset();
          setStep(STEPS.CATEGORY)
          rentModal.onClose();
        })
        .catch(() => {
          toast.error('Something went wrong.');
        })
        .finally(() => {
          setIsLoading(false);
        })
      }

    return (
    <Modal isOpen={rentModal.isOpen} onClose={rentModal.onClose} onSubmit={rentModal.onClose} actionLabel='Submit' title='ZechTravel always the best for you' />
    )
}

export default RentModal