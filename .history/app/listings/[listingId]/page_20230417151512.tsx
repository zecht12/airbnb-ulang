import getListingById from '@/app/actions/getListingById'
import React from 'react'

interface IParams{
    lis
}

const ListingPage = async({params}: {params: IParams}) => {
    const listing = await getListingById();
    return (
        <div>page</div>
    )
}

export default ListingPage