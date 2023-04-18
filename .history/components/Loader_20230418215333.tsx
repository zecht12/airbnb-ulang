import React from 'react'
import { BeatLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className=' h-[70vh] flex flex-col items-center justify-center '>
            <BeatLoader size={50} color='red' />
        </div>
    )
}

export default Loader