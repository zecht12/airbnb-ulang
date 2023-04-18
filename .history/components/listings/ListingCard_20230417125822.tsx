'use client'
import { SafeListing, SafeReservation, SafeUser } from '@/app/types';
import React from 'react'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from 'date-fns';
import useCountries from "@/app/hooks/useCountries";
import Buttons from "../Buttons";
import ClientOnly from "../ClientOnly";

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
    const router = useRouter();
    const { getByValue } = useCountries();
        const location = getByValue(data.locationValue);

        const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (disabled) {
            return;
        }
        onAction?.(actionId)
        }, [disabled, onAction, actionId]);

        const price = useMemo(() => {
        if (reservation) {
            return reservation.totalPrice;
        }
        return data.price;
        }, [reservation, data.price]);

        const reservationDate = useMemo(() => {
        if (!reservation) {
            return null;
        }
        const start = new Date(reservation.startDate);
        const end = new Date(reservation.endDate);
        return `${format(start, 'PP')} - ${format(end, 'PP')}`;
    }, [reservation]);

    return (
        <div className=''>
            <div></div>
        </div>
    )
}

export default ListingCard