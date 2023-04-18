import React from 'react'
import { BeatLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className=' h-[70vh] flex flex-col items-center justify-center '>
            <BeatLoader size={20} color='#36d7b7' />
        </div>
    )
}

export default Loader