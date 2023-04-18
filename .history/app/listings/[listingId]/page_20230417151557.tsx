import getListingById from '@/app/actions/getListingById'
import React from 'react'

interface IParams{
    listingId?: string;
}

const ListingPage = async({params}: {params: IParams}) => {
    const listing = await getListingById(pa);
    return (
        <div>page</div>
    )
}

export default ListingPage