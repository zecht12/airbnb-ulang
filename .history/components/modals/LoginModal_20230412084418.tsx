'use client';

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from 'next-auth/react';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/navigation";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Buttons from "../Buttons";

const LoginModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    
    const { register, handleSubmit,formState: {errors,},} = useForm<FieldValues>({
        defaultValues: {
        email: '',
        password: ''
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = 
    (data) => {
        setIsLoading(true);
        signIn('credentials', {...data, redirect: false,})
        .then((callback) => {
        setIsLoading(false);
        if (callback?.ok) {
            toast.success('Logged in');
            router.refresh();
            loginModal.onClose();
        }
        
        if (callback?.error) {
            toast.error(callback.error);
        }
        });
    }

    const onToggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [registerModal, loginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome to ZechTravel" subtitle="Create your account" />
            <Input id="email" label="Email" type="email" disabled={isLoading} register={register} errors={errors} required />
            <Input id="password" label="Password" type="password" disabled={isLoading} register={register} errors={errors} required />
        </div>
    )
    const footerContent=(
        <div className="flex flex-col gap-4">
            <hr/>
            <Buttons outline label="Continue With Google" icon={FcGoogle} onClick={()=> {}} />
            <Buttons outline label="Continue With Github" icon={AiFillGithub} onClick={()=> {}} />
            <div className="text-neutral-500 text-center mt-1 mb-4 font-poppins font-light">
                <div className="flex flex-row items-center gap-2">
                    <div>
                        Not Have An Account?
                    </div>
                    <div onClick={onToggle} className="hover:underline hover:text-blue-500 cursor-pointer text-neutral-800">
                        Register
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal disabled={isLoading} isOpen={loginModal.isOpen} title="Login" actionLabel="Continue" onClose={loginModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent}/>
    )
}

export default LoginModal