'use client'
import { SafeListing, SafeReservation, SafeUser } from '@/app/types';
import React from 'react'

interface ListingCardProps{
    data: SafeListing;
    reservation?: SafeReservation;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null
}

const   data: SafeListing;
reservation?: SafeReservation;
onAction?: (id: string) => void;
disabled?: boolean;
actionLabel?: string;
actionId?: string;
currentUser?: SafeUser | null => {
    return (
        <div>ListingCard</div>
    )
}

export default ListingCard