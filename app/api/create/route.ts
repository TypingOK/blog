import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/src/lib/auth";
import prisma from "@/src/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const session = await getServerSession(authOptions);

  const result = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      tag: body.tag,
      author: { connect: { email: session?.user?.email as string } },
    },
  });
  return NextResponse.json(result);
}
