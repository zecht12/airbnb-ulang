"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer () {
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