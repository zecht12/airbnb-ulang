'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return ( 
    <Image
        onClick={() => router.push('/home')}
        className="hidden md:block cursor-pointer rounded-full w-[50px] h-[50px] hover:scale-110 "
        src="/images/Logo.jpeg"
        height="50"
        width="50"
        alt="Logo"
    />
    );
}

export default Logo;