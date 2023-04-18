'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { SafeReservation, SafeUser } from "@/app/types"
;
import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";

interface ReservationsClientProps {
    reservations: SafeReservation[],
    currentUser?: SafeUser | null,
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({ reservations, currentUser }) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);

        axios.delete(`/api/reservations/${id}`)
        .then(() => {
        toast.success('Reservation cancelled');
        router.refresh();
        })
        .catch(() => {
        toast.error('Something went wrong.')
        })
        .finally(() => {
        setDeletingId('');
        })
    }, [router]);
    
    return (
        <div>ReservationClient</div>
    )
}

export default ReservationClient