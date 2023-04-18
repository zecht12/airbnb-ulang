'use client';

import Image from "next/image";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
    title: string;
    locationValue: string;
    imageSrc: string;
    id: string;
    currentUser?: SafeUser | null
}

const ListingHead: React.FC<ListingHeadProps> = ({ title, locationValue, imageSrc, id, currentUser }) => {
    const {getValue} = useCountries();
    return (
        <div>ListingHead</div>
    )
}

export default ListingHead