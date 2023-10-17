import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";

export async function GET(request: Request) {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        published: true,
        // category: "develope",
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
        thumbnail: true,
      },
      skip: 0,
      take: 5,
    });
    // console.log(posts);
    if (posts) {
      return NextResponse.json(posts);
    } else {
      return {};
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "Internal server error" });
  }
}
