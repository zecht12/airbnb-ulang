"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer () {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderThemeChanger = () => {
    if(!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    if(currentTheme === 'dark') {
    return (
        <div className=' w-auto h-auto bg-black'>
            <div className='flex w-full h-full justify-center p-2 '>
                <p className=' text-slate-100 text-sm font-poppins'>&copy;2023 ZechTravel, Inc. All Rights Reserved</p>
            </div>
        </div>
    )
    } else {
    return (
        <div className=' w-auto h-auto bg-slate-100'>
            <div className='flex w-full h-full justify-center p-2 '>
                <p className=' text-black text-sm font-poppins'>&copy;2023 ZechTravel, Inc. All Rights Reserved</p>
            </div>
        </div>
    )
    }

}

return (
    <div>
        {renderThemeChanger()}
    </div>
)
}