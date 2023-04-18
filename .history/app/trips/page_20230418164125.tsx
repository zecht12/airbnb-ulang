import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservation";

const TripPage = async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState>
                    
                </EmptyState>
            </ClientOnly>
        )
    }
}