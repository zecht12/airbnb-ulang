import { SafeListing, SafeUser } from "@/app/types";

import Heading from "@/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";

interface FavoritesClientProps {
    listings: SafeListing[],
    currentUser?: SafeUser | null,
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser
}) => {
    return (
        <div>FavoritesClient</div>
    )
}

export default FavoritesClient