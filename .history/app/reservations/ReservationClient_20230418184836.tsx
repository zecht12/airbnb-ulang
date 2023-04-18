'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { SafeReservation, SafeUser } from "@/app/types";
import Heading from "@/components/Heading";
import Container from "@/components/Container";
import ListingCard from "@/components/listings/ListingCard";

interface ReservationsClientProps {
    reservations: SafeReservation[],
    currentUser?: SafeUser | null,
}

const ReservationClient: React.FC<ReservationsClientProps> = ({ reservations, currentUser }) => {
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
        <Container>
            <Heading title="My reservations" subtitle="Booking on your properties" />
            
        </Container>
    )
}

export default ReservationClient