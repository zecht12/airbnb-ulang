import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from '@/app/libs/prismadb'

export async function getCurrentUser() {
    try{
        const session = await getses
    }
}