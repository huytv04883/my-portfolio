import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

// GET ALL COMMENTS OF A POST
export const GET = async (req: NextResponse) => {
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
