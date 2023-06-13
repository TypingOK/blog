import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  try {
    const page = searchParams.get("page");
    const perPage = searchParams.get("perPage");
    console.log(page, perPage);

    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        published: true,
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
      },
      skip: (Number(page) - 1) * Number(perPage),
      take: Number(perPage),
    });
    console.log(posts);
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
