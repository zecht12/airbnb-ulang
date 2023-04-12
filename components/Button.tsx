"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'

const Button = () => {
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
        <button onClick={() => setTheme('light')} className="bg-grey-100 hover:bg-gray-600">
            <BsFillSunFill className='w-[30px] p-2 rounded-md hover:ring-2 hover:ring-blue-800 bg-gray-600 h-[30px] text-slate-100' />
        </button>
    )
    } else {
    return (
        <button onClick={() => setTheme('dark')} className="bg-grey-100 hover:bg-gray-600">
            <BsFillMoonFill className='w-[30px] p-2 rounded-md hover:ring-2 hover:ring-blue-800 bg-gray-400 h-[30px] text-black' />
        </button>
    )
    }

}

return (
    <div>
        {renderThemeChanger()}
    </div>
)
}

export default Button