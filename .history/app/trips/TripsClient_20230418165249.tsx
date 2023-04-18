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

const TripsClient = () => {
    return (
        <div>TripsClient</div>
    )
}

export default TripsClient