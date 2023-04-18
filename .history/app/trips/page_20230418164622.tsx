import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservation";

const TripPage = async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState title="Unauthorize" subtitle="Please login first" />
            </ClientOnly>
        )
    }
    const reservations = await getReservations({
        userId: currentUser.id,
    });
    if(reservations.length === 0){
        return (
            <ClientOnly>
                <EmptyState title="No trips found" subtitle="Looks like you hasnt reserved anything." />
            </ClientOnly>
        )
    }
    return(
        <ClientOnly>
            <TripsClient
        </ClientOnly>
    )
}