'use client'
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

const ListingCard = () => {
    return (
        <div>ListingCard</div>
    )
}

export default ListingCard