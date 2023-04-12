import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from '@/app/libs/prismadb'
import { getSession } from "next-auth/react";

export a

export default async function getCurrentUser() {
    try{
        const session = await getSession();
    }
}