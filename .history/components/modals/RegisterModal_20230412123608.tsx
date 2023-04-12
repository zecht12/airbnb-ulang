'use client';

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler,useForm} from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Buttons from "../Buttons";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);
    
    const { register, handleSubmit,formState: {errors,},} = useForm<FieldValues>({
        defaultValues: {
        name: '',
        email: '',
        password: ''
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/register', data)
        .then(() => {
        toast.success('Registered!');
        registerModal.onClose();
        loginModal.onOpen();
        })
        .catch((error) => {
        toast.error('Something Wrong From Your Input');
        })
        .finally(() => {
        setIsLoading(false);
        })
    }

    const onToggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [registerModal, loginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome to ZechTravel" subtitle="Create your account" />
            <Input id="email" label="Email" type="email" disabled={isLoading} register={register} errors={errors} required />
            <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
            <Input id="password" label="Password" type="password" disabled={isLoading} register={register} errors={errors} required />
        </div>
    )
    const footerContent=(
        <div className="flex flex-col gap-4">
            <hr/>
            <Buttons outline label="Continue With Google" icon={FcGoogle} onClick={()=> signIn{'goole'}} />
            <Buttons outline label="Continue With Github" icon={AiFillGithub} onClick={() => signIn('github')} />
            <div className="text-neutral-500 text-center mt-1 mb-4 font-poppins font-light">
                <div className="flex flex-row items-center gap-2">
                    <div>
                        Already Have An Account?
                    </div>
                    <div onClick={onToggle} className="hover:underline hover:text-blue-500 cursor-pointer text-neutral-800">
                        Login
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal disabled={isLoading} isOpen={registerModal.isOpen} title="Register" actionLabel="continue" onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent} />
    )
}

export default RegisterModal