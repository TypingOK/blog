import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";
import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth/next";

export async function GET(reqeust: Request) {
  const result = await prisma.subCategory.findMany({
    select: {
      name: true,
    },
    orderBy: {
      order: "asc",
    },
  });

  if (result) {
    return NextResponse.json(result);
  } else {
    return NextResponse.json({ name: [] });
  }
}
