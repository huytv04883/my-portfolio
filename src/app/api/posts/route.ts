import prisma from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest | Request) => {
  try {
    if (req.url) {
      const { searchParams } = new URL(req.url);
      const page = searchParams.get('page');
      const cat = searchParams.get('cat');
      const ITEM_PER_PAGE = 2;

      const query = {
        take: ITEM_PER_PAGE,
        skip: ITEM_PER_PAGE * (Number(page) - 1),
        where: {
          ...(cat && { catSlug: cat }),
        },
      }

      const [posts, count] = await prisma.$transaction([
        prisma.post.findMany(query),
        prisma.post.count({ where: query.where })
      ]);

      return new NextResponse(JSON.stringify({ posts, count }));
    } else {
      return new NextResponse(
        JSON.stringify({ message: "URL is undefined", status: 400 })
      );
    }
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!", status: 500 })
    );
  }
};
