import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";

export async function GET(request: Request) {
  try {
    console.log("1111111111111111111111111111111111111111111");
    const posts = await prisma.post.findMany({
      where: {
        published: true,
      },
      select: {
        id: true,
      },
    });
    console.log(posts);

    if (posts) {
      return NextResponse.json(posts);
    } else {
      return NextResponse.json({ id: 0 });
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "Internal server error" });
  }
}
