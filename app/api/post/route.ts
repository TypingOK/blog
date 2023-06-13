import { NextResponse } from "next/server";
import { remark } from "remark";
import html from "remark-html";
import prisma from "@/src/lib/prisma";
import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth/next";

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") as string;

  const session = await getServerSession(authOptions);
  if (
    session &&
    session.user &&
    session.user.email === process.env.LOGIN_EMAIL
  ) {
    const result = await prisma.post.delete({
      where: {
        id: parseInt(id),
      },
    });

    if (result) {
      return NextResponse.json({
        data: "성공",
      });
    }
  } else {
    return NextResponse.json({
      data: "인증되지 않은 사용자입니다.",
    });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") as string;

  if (id !== null) {
    const feed = await prisma.post.findFirst({
      where: {
        AND: [{ id: parseInt(id) }, { published: true }],
      },
      include: {
        author: {
          select: { name: true },
        },
      },
    });

    if (feed !== null && feed !== undefined && feed.content) {
      const content = (
        await remark().use(html).process(feed.content)
      ).toString();
      const { content: _, ...rest } = feed;
      const result = {
        ...rest,
        content,
        id,
      };

      return NextResponse.json(result);
    } else {
      const result = {
        content: "",
      };
      return NextResponse.json(result);
    }
  } else {
    const result = {
      content: "",
    };
    return NextResponse.json(result);
  }
}
