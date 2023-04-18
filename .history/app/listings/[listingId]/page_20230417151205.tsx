import getListingById from '@/app/actions/getListingById'
import React from 'react'

const ListingPage = asy () => {
    const listing = await getListingById();
    return (
        <div>page</div>
    )
}

export default ListingPage