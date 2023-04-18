'use client';

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { Range } from "react-date-range";
import { useRouter } from "next/navigation";
import { differenceInDays, eachDayOfInterval } from 'date-fns';

import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

import Container from "@/components/Container";
import Categories from "@/components/navbar/Categories";

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
};

interface ListingClientProps {
    reservations?: SafeReservation[];
    listing: SafeListing & {
        user: SafeUser;
    };
    currentUser?: SafeUser | null;
}

const ListingClient:React.FC<ListingClientProps> = ({listing, currentUser}) => {
    const loginModal = useLoginModal();
    const router = useRouter();
  
    const disabledDates = useMemo(() => {
      let dates: Date[] = [];
  
      reservations.forEach((reservation: any) => {
        const range = eachDayOfInterval({
          start: new Date(reservation.startDate),
          end: new Date(reservation.endDate)
        });
  
        dates = [...dates, ...range];
      });
  
      return dates;
    }, [reservations]);
  
    const category = useMemo(() => {
       return categories.find((items) => 
        items.label === listing.category);
    }, [listing.category]);
  
    const [isLoading, setIsLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(listing.price);
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);

    const onCreateReservation = useCallback(() => {
        if (!currentUser) {
            return loginModal.onOpen();
        }
        setIsLoading(true);

        axios.post('/api/reservations', {
            totalPrice,
            startDate: dateRange.startDate,
            endDate: dateRange.endDate,
            listingId: listing?.id
        })
        .then(() => {
            toast.success('Listing reserved!');
            setDateRange(initialDateRange);
            router.push('/trips');
        })
        .catch(() => {
            toast.error('Something went wrong.');
        })
        .finally(() => {
            setIsLoading(false);
        })
    },
    [
        totalPrice, 
        dateRange, 
        listing?.id,
        router,
        currentUser,
        loginModal
    ]);

    useEffect(() => {
        if (dateRange.startDate && dateRange.endDate) {
            const dayCount = differenceInDays(
            dateRange.endDate, 
            dateRange.startDate
            );
            
            if (dayCount && listing.price) {
            setTotalPrice(dayCount * listing.price);
            } else {
            setTotalPrice(listing.price);
            }
        }
    }, [dateRange, listing.price]);

    return (
        <div>ListingClient</div>
    )
}

export default ListingClient