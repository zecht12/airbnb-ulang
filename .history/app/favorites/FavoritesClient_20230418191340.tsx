import { SafeListing, SafeUser } from "@/app/types";

import Heading from "@/components/Heading";
import Container from "@/components/Container";
import ListingCard from "@/components/listings/ListingCard";

interface FavoritesClientProps {
    listings: SafeListing[],
    currentUser?: SafeUser | null,
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({ listings, currentUser }) => {
    return (
        <Container>
            <Heading title="" />
        </Container>
    )
}

export default FavoritesClient