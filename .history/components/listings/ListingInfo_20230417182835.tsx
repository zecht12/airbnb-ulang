'use client'

import { SafeUser } from '@/app/types'
import React from 'react'

interface ListingInfoProps{
    user:SafeUser,
    description: struing
}

const ListingInfo:React.FC<ListingInfoProps> = () => {
    return (
        <div>ListingInfo</div>
    )
}

export default ListingInfo