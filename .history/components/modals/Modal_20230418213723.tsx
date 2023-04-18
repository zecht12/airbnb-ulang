"use client";
import React, { useCallback, useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import Buttons from '../Buttons';

interface ModalProps{
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, title, body, actionLabel, footer, disabled,secondaryAction,secondaryActionLabel}) => {
    const [showModal, setShowModal]= useState(isOpen);

    useEffect(()=>{
        setShowModal(isOpen);
    },[isOpen])

    const handleClose = useCallback(() => {
        if (disabled) {
        return;
        }
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300)
    }, [onClose, disabled]);
    
    const handleSubmit = useCallback(() => {
        if (disabled) {
        return;
        }
    
        onSubmit();
    }, [onSubmit, disabled]);
    
    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
        return;
        }
    
        secondaryAction();
    }, [secondaryAction, disabled]);
    
    if (!isOpen) {
        return null;
    }

    return (
    <>
        <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70'>
            <div className='relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-4 mx-auto h-full md:h-auto lg:h-auto'>
                {/* {content} */}
                <div className={`translate duration-300 h-full ${showModal? 'translate-y-0':'translate-y-full'} ${showModal? 'opacity-100':'opacity-0'}`}>
                    <div className='translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none'>
                        {/* {header} */}
                        <div className='flex items-center px-6 py-4 rounded-t justify-center relative border-b-[1px] '>
                            <button onClick={handleClose} className='p-1 transition border-0 hover:opacity-70 absolute left-9'>
                                <IoMdClose size={18} />
                            </button>
                            <div className='text-lg font-semibold font-poppins'>
                                {title}
                            </div>
                        </div>
                        {/* {body} */}
                        <div className='relative px-6 py-2 flex-auto'>
                            {body}
                        </div>
                        {/* {footer} */}
                        <div className='flex flex-col py-2 px-6 gap-2'>
                            <div className='flex flex-col items-center w-full gap-4'>
                                {secondaryAction && secondaryActionLabel && (
                                    <Buttons outline disabled={disabled} label={secondaryActionLabel} onClick={handleSecondaryAction} />
                                )}
                                <Buttons disabled={disabled} label={actionLabel} onClick={handleSubmit} />
                            </div>
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Modal