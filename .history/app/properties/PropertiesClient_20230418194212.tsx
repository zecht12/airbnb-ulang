'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { SafeListing, SafeUser } from "@/app/types";
import Heading from "@/components/Heading";
import Container from "@/components/Container";
import ListingCard from "@/components/listings/ListingCard";

interface PropertiesClientProps {
    listings: SafeListing[],
    currentUser?: SafeUser | null,
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({ listings, currentUser }) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    const onDelete = useCallback((id: string) => {
        setDeletingId(id);

        axios.delete(`/api/listings/${id}`)
        .then(() => {
        toast.success('Listing deleted');
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
        <Container>
            <Heading title="My properties" subtitle="List of your properties" />
            <div>
                
            </div>
        </Container>
    )
}

export default PropertiesClient