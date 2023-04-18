import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
        <ClientOnly> 
            <EmptyState title="Unauthorized" subtitle="Please login" />
        </ClientOnly>
        )
    }


    if (listings.length === 0) {
        return (
        <ClientOnly>
            <EmptyState title="No favorites found" subtitle="Looks like you have no reservations on your properties." />
        </ClientOnly>
        );
    }

    return (
        <ClientOnly>
                
        </ClientOnly>
    );
}

export default FavoritesPage;