import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";
import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth/next";
import { revalidateTag } from "next/cache";

export async function GET(reqeust: Request) {
  const result = await prisma.subCategory.findMany({
    select: {
      id: true,
      name: true,
      order: true,
    },
    orderBy: {
      order: "asc",
    },
  });

  const subCategoryIds = result.map((subCategory) => subCategory.id);
  
  const postCounts = await prisma.post.groupBy({
    by: ["subCategoryId"],
    where: {
      subCategoryId: {
        in: subCategoryIds,
      },
    },
    _count: {
      subCategoryId: true,
    },
  });

  const response = result.map((subCategory) => {
    const postCount = postCounts.find(
      (postCount) => postCount.subCategoryId === subCategory.id
    );

    const count = postCount ? postCount._count.subCategoryId : 0;

    return {
      ...subCategory,
      postCount: count,
    };
  });

  if (response) {
    return NextResponse.json(response);
  } else {
    return NextResponse.json({ name: [] });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const session = await getServerSession(authOptions);
  if (session !== null && session.user?.email === process.env.LOGIN_EMAIL) {
    const result = await prisma.subCategory.create({
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(result);
  } else {
    return NextResponse.json({ data: "error!!" });
  }
}

export async function PATCH(request: Request) {
  const body = await request.json();
  const session = await getServerSession(authOptions);
  if (session !== null && session.user?.email === process.env.LOGIN_EMAIL) {
    const result = await prisma.subCategory.update({
      where: { id: body.id },
      data: { name: body.name },
    });

    return NextResponse.json({ data: "Success!!" });
  } else {
    return NextResponse.json({ data: "error!" });
  }
}

export async function PUT(request: Request) {
  const body = await request.json();
  const session = await getServerSession(authOptions);
  if (session !== null && session.user?.email === process.env.LOGIN_EMAIL) {
    for (const item of body.subCategory) {
      await prisma.subCategory.update({
        where: { id: item.id },
        data: { order: item.order },
      });
    }

    return NextResponse.json({ data: "Success!!" });
  } else {
    return NextResponse.json({ data: "error!!" });
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") as string;

  const session = await getServerSession(authOptions);

  if (
    session &&
    session.user &&
    session.user.email === process.env.LOGIN_EMAIL
  ) {
    const result = await prisma.subCategory.delete({
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
