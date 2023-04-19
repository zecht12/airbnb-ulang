import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

export interface IListing {
    id: number;
    userId: string;
    guestCount: number;
    roomCount: number;
    bathroomCount: number;
    locationValue: string;
    category: string;
    createdAt: string;
}

export default async function getListings(params: IListingsParams): Promise<Array<IListing>> {
    try {
        const {
        userId,
        roomCount,
        guestCount,
        bathroomCount,
        locationValue,
        startDate,
        endDate,
        category,
        } = params;

        let query: any = {};

        if (userId) {
        query.userId = userId;
        }

        if (category) {
        query.category = category;
        }

        if (roomCount) {
        query.roomCount = {
            gte: +roomCount,
        };
        }

        if (guestCount) {
        query.guestCount = {
            gte: +guestCount,
        };
        }

        if (bathroomCount) {
        query.bathroomCount = {
            gte: +bathroomCount,
        };
        }

        if (locationValue) {
        query.locationValue = locationValue;
        }

        if (startDate && endDate) {
        query.NOT = {
            reservations: {
            some: {
                OR: [
                {
                    endDate: { gte: startDate },
                    startDate: { lte: startDate },
                },
                {
                    startDate: { lte: endDate },
                    endDate: { gte: endDate },
                },
                ],
            },
            },
        };
        }

        const listings = await prisma.listing.findMany({
        where: query,
        orderBy: {
            createdAt: 'desc',
        },
        });

        const safeListings = listings.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt ? listing.createdAt.toISOString() : undefined,
            }));

        return safeListings
    } catch (error: any) {
        throw new Error(error);
    }
}