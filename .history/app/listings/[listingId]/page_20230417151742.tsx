import getListingById from '@/app/actions/getListingById'
import React from 'react'

interface IParams{
    listingId?: string;
}

const ListingPage = async({params}: {params: IParams}) => {
    const listing = await getListingById(params);
    const reservations = await getReservations(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <ClientOnly>
            <EmptyState />
            </ClientOnly>
        );
    }

    return (
        <div>page</div>
    )
}

export default ListingPage