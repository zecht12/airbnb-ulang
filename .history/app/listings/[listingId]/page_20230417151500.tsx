import getListingById from '@/app/actions/getListingById'
import React from 'react'

interface IParams{

}

const ListingPage = async({params}: {params: IParams}) => {
    const listing = await getListingById();
    return (
        <div>page</div>
    )
}

export default ListingPage