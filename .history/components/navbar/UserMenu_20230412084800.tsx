"use client";

import React, { useCallback, useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { signOut } from "next-auth/react";
import { SafeUser } from '@/app/types';
import useLoginModal from '@/app/hooks/useLoginModal';

interface UserMenuProps {
    currentUser?: SafeUser | null
    }

const UserMenu: React.FC<UserMenuProps> = ({currentUser}) => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const rentModal = useRentModal();

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
    <div className='relative'>
        <div className='flex flex-row items-center gap-3'>
            <div onClick={()=>{}} className='hidden md:block text-sm font-semibold px-4 py-3 rounded-full hover:bg-slate-100 text-black transition cursor-pointer'>
                ZechTravel - Home
            </div>
            <div onClick={toggleOpen} className='p-4 md:py-1 md:px-2 border-[1px] border-slate-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
                <AiOutlineMenu size={18}/>
                <div className='hidden md:block'>
                    <Avatar/>
                </div>
            </div>
        </div>
        {isOpen && (
            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-slate-100 overflow-hidden right-0 top-12 text-sm">
                <div className="flex flex-col cursor-pointer">
                    <>
                        <MenuItem label="Login" onClick={loginModal.onOpen}/>
                        <MenuItem label="Sign up" onClick={registerModal.onOpen}/>
                        <MenuItem label="Log out" onClick={() => signOut()}/>
                    </>
                </div>
            </div>
        )}
    </div>
    )
}

export default UserMenu