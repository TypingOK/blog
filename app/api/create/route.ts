import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/src/lib/auth";
import prisma from "@/src/lib/prisma";
import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const body = await request.json();

  const session = await getServerSession(authOptions);

  console.log(session);
  if (session !== null && session.user?.email === process.env.LOGIN_EMAIL) {
    const result = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        tag: body.tag,
        category: body.category,
        thumbnail: body.thumbnail,
        author: { connect: { email: session?.user?.email as string } },
        description: body.description,
        subCategory: { connect: { id: body.subCategory } },
      },
    });
    revalidateTag("posts");
    return NextResponse.json(result);
  } else {
    return NextResponse.json({ data: "error!!" });
  }
}
