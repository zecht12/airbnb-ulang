import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";
import PropertiesClient from "./PropertiesClient";

const page = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return <EmptyState
        title="Unauthorized"
        subtitle="Please login"
      />
    }
  
    const listings = await getListings({ userId: currentUser.id });
  
    if (listings.length === 0) {
      return (
        <ClientOnly>
          <EmptyState
            title="No properties found"
            subtitle="Looks like you have no properties."
          />
        </ClientOnly>
      );
    }
    return (
        <div>page</div>
    )
}

export default page