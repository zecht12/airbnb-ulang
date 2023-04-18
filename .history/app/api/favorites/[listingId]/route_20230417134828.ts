import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from '@/app/libs/prismadb'
interface Iparam{
    listingId?: string;

}

export async function POST(request:Request, {params}:{params}) {
    
}