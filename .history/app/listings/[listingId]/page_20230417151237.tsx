import getListingById from '@/app/actions/getListingById'
import React from 'react'

const ListingPage = async ({params}: {params: Ipa}) => {
    const listing = await getListingById();
    return (
        <div>page</div>
    )
}

export default ListingPage