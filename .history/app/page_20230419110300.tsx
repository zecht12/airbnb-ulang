import Container from "@/components/Container";
import ListingCard from "@/components/listings/ListingCard";
import EmptyState from "@/components/EmptyState";
import { IListing } from "@/types/listing";
import { IUser } from "@/types/user";
import { getListings, IListingsParams } from "@/app/actions/listings";
import { getCurrentUser } from "@/app/actions/users";
import ClientOnly from "@/components/ClientOnly";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

interface HomeProps {
  listings: IListing[],
  currentUser: IUser | null
};

const Home = ({ listings, currentUser }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((listing:IListing)=>{
            return(
              <ListingCard currentUser={currentUser} key={listing.id} data={listing}/>
            )
          })}
        </div>
      </Container>
    </ClientOnly>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ query }) => {
  const searchParams: IListingsParams = {
    page: query.page || "1",
    location: query.location as string,
    guests: query.guests as string,
    beds: query.beds as string,
    baths: query.baths as string,
    price_min: query.price_min as string,
    price_max: query.price_max as string,
    instant_book: query.instant_book as string,
  };
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  return {
    props: {
      listings,
      currentUser
    }
  }
}

export default Home;
