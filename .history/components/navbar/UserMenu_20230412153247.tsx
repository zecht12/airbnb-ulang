"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { SafeUser } from "@/app/types";
import MenuItem from "./MenuItem";
import Avatar from "../Avatar";
import rentModal from "../modals/RentModal";

interface UserMenuProps {
    currentUser?: SafeUser | null
    }

const UserMenu: React.FC<UserMenuProps> = ({currentUser}) => {
    const router = useRouter();
    const LoginModal = useLoginModal();
    const RegisterModal = useRegisterModal();
    const rentModal = useRentModal();
    const [isOpen, setIsOpen] = useState(false);

    const onRent = useCallback(() => {
        if (!currentUser) {
            return LoginModal.onOpen();
        }
        rentModal.
    
    }, [LoginModal, rentModal, currentUser]);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
    <div className='relative'>
        <div className='flex flex-row items-center gap-3'>
            <div onClick={onRent} className='hidden md:block text-sm font-semibold px-4 py-3 rounded-full hover:bg-slate-100 text-black transition cursor-pointer'>
                Travel with us
            </div>
            <div onClick={toggleOpen} className='p-4 md:py-1 md:px-2 border-[1px] border-slate-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
                <AiOutlineMenu size={18}/>
                <div className='hidden md:block'>
                    <Avatar src={currentUser?.image} />
                </div>
            </div>
        </div>
        {isOpen && (
            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-slate-100 overflow-hidden right-0 top-12 text-sm">
                <div className="flex flex-col cursor-pointer">
                    {currentUser? (
                    <>
                        <MenuItem label="My trips" onClick={() => {}}/>
                        <MenuItem label="My favorite" onClick={() => {}}/>
                        <MenuItem label="My reservation" onClick={() => {}}/>
                        <MenuItem label="My properties" onClick={() => {}}/>
                        <hr />
                        <MenuItem label="Log out" onClick={() => signOut()}/>
                    </>
                    )
                    :(
                    <>
                        <MenuItem label="Login" onClick={LoginModal.onOpen}/>
                        <MenuItem label="Sign up" onClick={RegisterModal.onOpen}/>
                    </>
                    )
                    }
                </div>
            </div>
        )}
    </div>
    )
}

export default UserMenu