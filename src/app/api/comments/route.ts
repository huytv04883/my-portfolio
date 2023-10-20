import prisma from "@/app/utils/connect";
import { NextResponse, NextRequest } from "next/server";
import { getAuthSession } from "@/app/utils/auth";

// GET ALL COMMENTS OF A POST
export const GET = async (req: NextRequest) => {
    try {
        if (req.url) {
            const { searchParams } = new URL(req.url);
            const postSlug = searchParams.get("postSlug");

            const comments = await prisma.comment.findMany({
                where: {
                    ...(postSlug && { postSlug }),
                },
                include: { user: true },
            });

            return new NextResponse(JSON.stringify(comments));
        }
    } catch (err) {
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" })
        );
    }
};

// CREATE A COMMENT
export const POST = async (req: NextRequest) => {
    const session = await getAuthSession();

    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "Not Authenticated!", status: 401 })
        );
    }

    try {
        const body = await req.json();
        const comment = await prisma.comment.create({
            data: { ...body, userEmail: session.user?.email },
        });

        return new NextResponse(JSON.stringify(comment));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!", status: 500 })
        );
    }
};


