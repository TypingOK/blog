import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";

export async function GET(reqeust: Request) {
  const postCounts = await prisma.post.aggregate({
    _count: {
      published: true,
    },
  });

  if (postCounts) {
    return NextResponse.json(postCounts);
  } else {
    return NextResponse.json({ name: [] });
  }
}
