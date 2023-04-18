import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";

const FavoritesPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
        <ClientOnly> 
            <EmptyState title="Unauthorized" subtitle="Please login" />
        </ClientOnly>
        )
    }


    if (reservations.length === 0) {
        return (
        <ClientOnly>
            <EmptyState title="No reservations found" subtitle="Looks like you have no reservations on your properties." />
        </ClientOnly>
        );
    }

    return (
        <ClientOnly>
        </ClientOnly>
    );
}

export default FavoritesPage;