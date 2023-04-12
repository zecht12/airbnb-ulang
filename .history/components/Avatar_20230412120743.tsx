"use client";

import Image from 'next/image';
import React from 'react'
interface AvatarProps {
    src?: string;
}

const Avatar = () => {
    return (
        <Image
        className="hidden md:block cursor-pointer rounded-full w-[30px] h-[30px] hover:scale-110 "
        src="/images/Logo.png"
        height="30"
        width="30"
        alt="Logo"
    />
    )
}

export default Avatar