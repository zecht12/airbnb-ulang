import getListingById from '@/app/actions/getListingById'
import React from 'react'

const ListingPage = () => {
    const listing = await getListingById();
    return (
        <div>page</div>
    )
}

export default ListingPage