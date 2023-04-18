'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { SafeReservation, SafeUser } from "@/app/types";

import Heading from "@/components/Heading";
import Container from "@/components/Container";
import ListingCard from "@/components/listings/ListingCard";

interface TripsClientProps {
    reservations: SafeReservation[],
    currentUser?: SafeUser | null,
}

const TripsClient: React.FC<TripsClientProps> = ({
    reservations,
    currentUser
    }) => {
        const router = useRouter();
        const [deletingId, setDeletingId] = useState('');
    
        const onCancel = useCallback((id: string) => {
        setDeletingId(id);
    
        axios.delete(`/api/reservations/${id}`)
        .then(() => {
            toast.success('Reservation cancelled');
            router.refresh();
        })
        .catch((error) => {
            toast.error(error?.response?.data?.error)
        })
        .finally(() => {
            setDeletingId('');
        })
        }, [router]);
    return (
        <div>TripsClient</div>
    )
}

export default TripsClient