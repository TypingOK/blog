import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";

interface WhereCondition {
  published: boolean;
  category: string;
  subCategory?: { name: string }; // 수정된 부분
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  try {
    const page = searchParams.get("page");
    const perPage = searchParams.get("perPage");
    const subCategory = searchParams.get("subCategory");

    const whereCondition: WhereCondition = {
      published: true,
      category: "develope",
    };

    if (subCategory) {
      whereCondition.subCategory = { name: subCategory };
    }

    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: whereCondition,
      select: {
        id: true,
        title: true,
        createdAt: true,
        thumbnail: true,
      },
      skip: (Number(page) - 1) * Number(perPage),
      take: Number(perPage),
    });

    if (posts) {
      return NextResponse.json(posts);
    } else {
      return {};
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "내부 서버 오류" });
  }
}
