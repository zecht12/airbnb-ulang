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

const ListingCard: React.FC<ListingCardProps> = ({
    data,reservation,onAction,disabled,actionLabel,actionId = '',currentUser }) => {
    return (
        <div>ListingCard</div>
    )
}

export default ListingCard