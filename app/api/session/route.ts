import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  console.log("세션", session);
  if (!session) {
    return new NextResponse(
      JSON.stringify({ status: "fail", message: "You are not logged in" }),
      { status: 401 }
    );
  }
  return NextResponse.json({
    authenicated: !!session,
    session,
  });
}
