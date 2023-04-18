'use client'

import dynamic from "next/dynamic";
import { IconType } from "react-icons";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";

const Map = dynamic(() => import('../Map'), { 
    ssr: false 
});

interface ListingInfoProps {
    user: SafeUser,
    description: string;
    guestCount: number;
    roomCount: number;
    bathroomCount: number;
    category: {
        icon: IconType,
        label: string;
        description: string;
    } | undefined
    locationValue: string;
}

const ListingInfo:React.FC<ListingInfoProps> = ({ user,description,guestCount,roomCount,bathroomCount,category,locationValue }) => {
    return (
        <div className="flex flex-col col-span-4 gap">
            
        </div>
    )
}

export default ListingInfo