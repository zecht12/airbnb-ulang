import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from '@/app/libs/prismadb'
interface Iparam{
    listingId?: string;

}

export async function POST(request:Request, {params}:{params:Iparam}) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return NextResponse.error();
      }
    
      const { listingId } = params;
    
      if (!listingId || typeof listingId !== 'string') {
        throw new Error('Invalid ID');
      }
    
      let favoriteIds = [...(currentUser.favoriteIds || [])];
    
      favoriteIds.push(listingId);
    
      const user = await prisma.user.update({
        where: {
          id: currentUser.id
        },
        data: {
          favoriteIds
        }
      });
    
      return NextResponse.json(user);
    }
