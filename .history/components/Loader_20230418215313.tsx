import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className=' h-[70vh] flex flex-col items-center justify-center '>
            <BeatLoader size={100} color='red' />
        </div>
    )
}

export default Loader