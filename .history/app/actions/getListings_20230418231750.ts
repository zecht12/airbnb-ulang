import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
    userId?: string;
    guestCount?: number;
    roomCount?: number;
    bathroomCount?: number;
    startDate?: string;
    endDate?: string;
    locationValue?: string;
    category?: string;
}


export default async function getListings(params: IListingsParams) {
    try {
        const {
        roomCount,
        guestCount,
        bathroomCount,
        locationValue,
        startDate,
        endDate,
        category,
        } = params;

        const query: any = {};

        if (category) {
        query.category = category;
        }

        if (roomCount) {
        query.roomCount = {
            gte: roomCount,
        };
        }

        if (guestCount) {
        query.guestCount = {
            gte: guestCount,
        };
        }

        if (bathroomCount) {
        query.bathroomCount = {
            gte: bathroomCount,
        };
        }

        if (locationValue) {
        query.locationValue = {
            contains: locationValue,
            mode: "insensitive",
        };
        }

        if (startDate && endDate) {
        query.NOT = {
            reservations: {
            some: {
                AND: [
                {
                    startDate: { lte: endDate },
                    endDate: { gte: endDate },
                },
                {
                    startDate: { lte: startDate },
                    endDate: { gte: startDate },
                },
                {
                    startDate: { gte: startDate },
                    endDate: { lte: endDate },
                },
                ],
            },
            },
        };
        }

        const listings = await prisma.listing.findMany({
        where: query,
        orderBy: {
            createdAt: "desc",
        },
        });

        const safeListings = listings.map((listing) => ({
        ...listing,
        createdAt: listing.createdAt.toISOString(),
        }));

        return safeListings;
    } catch (error: any) {
        throw new Error(error);
    }
}