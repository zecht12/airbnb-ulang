'use client'
import { SafeListing, SafeReservation, SafeUser } from '@/app/types';
import React from 'react'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from 'date-fns';

interface ListingCardProps{
    data: SafeListing;
    reservation?: SafeReservation;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null
}

const ListingCard: React.FC<ListingCardProps> = ({ data,reservation,onAction,disabled,actionLabel,actionId = '',currentUser }) => {
    
    return (
        <div>ListingCard</div>
    )
}

export default ListingCard