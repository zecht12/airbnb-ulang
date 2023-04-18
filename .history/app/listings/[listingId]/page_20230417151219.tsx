import getListingById from '@/app/actions/getListingById'
import React from 'react'

const ListingPage = async ({params}: ) => {
    const listing = await getListingById();
    return (
        <div>page</div>
    )
}

export default ListingPage