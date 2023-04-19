"use client";
import { useEffect, useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import Categories from "./Categories";

interface NavbarProps {
    currentUser?: SafeUser | null;
    }

const Navbar: React.FC <NavbarProps> = ({currentUser}) => {
    const [mounted, setMounted] = useState(false);
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

useEffect (() => {
const changeColor = () => {
    if(window.scrollY >= 20) {
        setColor(true);
    } else {
        setColor(false);
    }
}
window.addEventListener('scroll', changeColor);
return() => {
    window.removeEventListener('scroll', changeColor);
}
},[])

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <div className="fixed bg-slate-100 w-full h-[100px] z-10 shadow-sm">
            <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-4 '>
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo/>
                        <Search/>
                        <UserMenu currentUser={currentUser} />
                    </div>
                </Container>
            </div>
            <Categories/>
        </div>
    )
}
export default Navbar;