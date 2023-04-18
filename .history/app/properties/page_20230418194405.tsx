import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";
import PropertiesClient from "./PropertiesClient";

const page = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState title="Unauthorize" subtitle="Please login first" />
            </ClientOnly>
        )
    }
    
        const listings = await getListings({ userId: currentUser.id });
    
        if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState title="No properties found" subtitle="Looks like you have no properties." />
            </ClientOnly>
        );
    }
    return (
        <ClientOnly>
            <PropertiesClient/>
        </ClientOnly>
    )
}

export default page